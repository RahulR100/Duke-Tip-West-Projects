function add (char) {
	document.getElementById('inp').value += char;
}

function cls () {
	document.getElementById('inp').value = "";
}

function calc () {
	var inp = document.getElementById('inp').value.split(" ");
	console.log(inp);
	var count = 0;
	while (count < inp.length) {
		count++;
		if (inp[count] == "+" || inp[count] == "-" || inp[count] == "/" || inp[count] == "*") {
			var prev = count - 1;
			var base = count - 2;
			if (base < 0 || prev < 0) {
				alert("Error! Check the entry");
				stopCalc();
			}
			var num_1 = parseFloat(inp[base]);
			var num_2 = parseFloat(inp[prev]);
			var oper = inp[count];
			switch (oper) {
				case "+":
				var ans = num_1 + num_2;
				break;

				case "-":
				var ans = num_1 - num_2;
				break;

				case "*":
				var ans = num_1 * num_2;
				break;

				case "/":
				var ans = num_1 / num_2;
				break;
			}
			inp.splice(base, (count));
			inp[0] = ans;
			document.getElementById('inp').value = ans;
			console.log(inp);
			count = 0;
		}
	}
}

function stopCalc() {
	console.log("Calculation stopped");
	cls();
}