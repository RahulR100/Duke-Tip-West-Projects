	var chk = setInterval(function(){ check() }, 200);
	var clrmsg = setInterval(function() { clearmsg() }, 2000);
	$won = 0;
	$turns = 0;


	function reminterval(name) {
		clearInterval(name);
	}

	function check() {
		if (document.getElementById('11').innerHTML == "O" && document.getElementById('12').innerHTML == "O" && document.getElementById('13').innerHTML == "O") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('12').style.backgroundColor = "green";
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('11').innerHTML == "X" && document.getElementById('12').innerHTML == "X" && document.getElementById('13').innerHTML == "X") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('12').style.backgroundColor = "green";
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('21').innerHTML == "O" && document.getElementById('22').innerHTML == "O" && document.getElementById('23').innerHTML == "O") {
			document.getElementById('21').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('23').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('21').innerHTML == "X" && document.getElementById('22').innerHTML == "X" && document.getElementById('23').innerHTML == "X") {
			document.getElementById('21').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('23').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('31').innerHTML == "O" && document.getElementById('32').innerHTML == "O" && document.getElementById('33').innerHTML == "O") {
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('32').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('31').innerHTML == "X" && document.getElementById('32').innerHTML == "X" && document.getElementById('33').innerHTML == "X") {
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('32').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('11').innerHTML == "O" && document.getElementById('21').innerHTML == "O" && document.getElementById('31').innerHTML == "O") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('21').style.backgroundColor = "green";
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('11').innerHTML == "X" && document.getElementById('21').innerHTML == "X" && document.getElementById('31').innerHTML == "X") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('21').style.backgroundColor = "green";
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('12').innerHTML == "O" && document.getElementById('22').innerHTML == "O" && document.getElementById('32').innerHTML == "O") {
			document.getElementById('12').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('32').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('12').innerHTML == "X" && document.getElementById('22').innerHTML == "X" && document.getElementById('32').innerHTML == "X") {
			document.getElementById('12').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('32').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('13').innerHTML == "O" && document.getElementById('23').innerHTML == "O" && document.getElementById('33').innerHTML == "O") {
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('23').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('13').innerHTML == "X" && document.getElementById('23').innerHTML == "X" && document.getElementById('33').innerHTML == "X") {
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('23').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('11').innerHTML == "O" && document.getElementById('22').innerHTML == "O" && document.getElementById('33').innerHTML == "O") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('11').innerHTML == "X" && document.getElementById('22').innerHTML == "X" && document.getElementById('33').innerHTML == "X") {
			document.getElementById('11').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('33').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('13').innerHTML == "O" && document.getElementById('22').innerHTML == "O" && document.getElementById('31').innerHTML == "O") {
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "O has won!";
			$won = 1;
			reminterval(chk);
		}
		if (document.getElementById('13').innerHTML == "X" && document.getElementById('22').innerHTML == "X" && document.getElementById('31').innerHTML == "X") {
			document.getElementById('13').style.backgroundColor = "green";
			document.getElementById('22').style.backgroundColor = "green";
			document.getElementById('31').style.backgroundColor = "green";
			document.getElementById('msg').innerHTML = "X has won!";
			$won = 1;
			reminterval(chk);
		}
		if ($turns == 9 && $won == 0) {
			document.getElementById('11').style.backgroundColor = "orange";
			document.getElementById('12').style.backgroundColor = "orange";
			document.getElementById('13').style.backgroundColor = "orange";
			document.getElementById('21').style.backgroundColor = "orange";
			document.getElementById('22').style.backgroundColor = "orange";
			document.getElementById('23').style.backgroundColor = "orange";
			document.getElementById('31').style.backgroundColor = "orange";
			document.getElementById('32').style.backgroundColor = "orange";
			document.getElementById('33').style.backgroundColor = "orange";
			document.getElementById('msg').innerHTML = "This game has ended in a draw. Start a new game and try again.";
			$won = 0;
		}
	}

	$last_added = "";
	document.getElementById('turns').innerHTML = "Turn" + " " + $turns;

	function addPawn(id) {
		if ($won == 1) {
			document.getElementById('msg').innerHTML = "The game is already over!";
		} else {
			if ($last_added == "O") {
				if (document.getElementById(id).innerHTML == "O" || document.getElementById(id).innerHTML == "X") {
					document.getElementById('msg').innerHTML = "You cannot change the content of a square once filled.";
				} else {
					document.getElementById(id).innerHTML = "X";
					$turns++;
					document.getElementById('turns').innerHTML = "Turn" + " " + $turns;
					$last_added = "X";
				}
			} else {
				if (document.getElementById(id).innerHTML == "O" || document.getElementById(id).innerHTML == "X") {
					document.getElementById('msg').innerHTML = "You cannot change the content of a square once filled.";
				} else {
					document.getElementById(id).innerHTML = "O";
					$turns++;
					document.getElementById('turns').innerHTML = "Turn" + " " + $turns;
					$last_added = "O";
				}
			}
		}
	}
/*	function addX(id) {
		if ($won == 1) {
			document.getElementById('msg').innerHTML = "The game is already over!";
		} else {
			if ($last_added == "X") {
				document.getElementById('msg').innerHTML = "You already played your turn!";
			} else {
				if (document.getElementById(id).innerHTML == "O" || document.getElementById(id).innerHTML == "X") {
					document.getElementById('msg').innerHTML = "You cannot change the content of a square once filled.";
				} else {
					document.getElementById(id).innerHTML = "X";
					$turns++;
					document.getElementById('turns').innerHTML = "Turn" + " " + $turns;
					$last_added = "X";
				}
			}
		}
	}*/

	function clearmsg() {
		document.getElementById('msg').innerHTML = "";
	}