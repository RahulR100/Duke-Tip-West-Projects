var mins = 0;
var secs = 0;
var addedofm = false;
function timer() {
	secs++;
	if (secs >= 60) {
		mins++;
		secs = 0;
		addedofm = false;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}
	if (mins < 10 && addedofm == false) {
		mins = "0" + mins;
		addedofm = true;
	}
	document.getElementById('timer').innerHTML = mins + ":" + secs;
}

var paused = 0;
function togGame() {
	if (paused == 0) {
		remintvals();
		document.getElementById('messages').innerHTML = '<div class="alert alert-info" role="alert">The game has been paused.</div>';
		document.getElementById('stp').innerHTML = "Resume game.";
		paused = 1;
	} else {
		addintvals();
		document.getElementById('messages').innerHTML = "";
		document.getElementById('stp').innerHTML = "Pause game.";
		paused = 0;
	}
}

function winner(w) {
	if (w == "blue") {
		document.getElementById('messages').innerHTML = '<div class="alert alert-info" role="alert">Blue wins! <a onclick="location.reload();">Start a new game</a></div>';
		document.getElementById('stp').style.visibility = "hidden";
		document.getElementById('edg').style.visibility = "hidden";
		document.getElementById('sep').style.backgroundColor = '#fff';
	}
	if (w == "red") {
		document.getElementById('messages').innerHTML = '<div class="alert alert-danger" role="alert">Red wins! <a onclick="location.reload();">Start a new game</a></div>';
		document.getElementById('stp').style.visibility = "hidden";
		document.getElementById('edg').style.visibility = "hidden";
		document.getElementById('sep').style.backgroundColor = '#fff';
	}
}

function stopGameError() {
	document.getElementById('messages').innerHTML = '<div class="alert alert-danger" role="alert">There was an error starting the game. Please <a onclick="location.reload();">try again.</a></div>'
}

let max_score = 0;
let canvas = document.getElementById('board');
let ctx = canvas.getContext('2d');
let max_sensitivity = 20;
let a_sens = 8; // when pad goes against ball movement
let s_sens = 2; // when pad is in the same direction as ball movement
let fps = (1000/60);

let pad_width = 20;
let pad_height = 150;

var blue_score = 0;
var red_score = 0;
var blue_hits = 0;
var red_hits = 0;
var red_score_message = '<div class="alert alert-danger" role="alert">Red scores!</div>';
var blue_score_message = '<div class="alert alert-info" role="alert">Blue scores!</div>';

let pad_l  = {
	top: ((canvas.height / 2) - (pad_height / 2)),
	left: 0,
	height: pad_height,
	width: pad_width,
	sensitivity: 10
}
let pad_r = {
	top: ((canvas.height / 2) - (pad_height / 2)),
	left: (canvas.width - pad_width),
	height: pad_height,
	width: pad_width,
	sensitivity: 10
}
let ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	dx: 5, //cannot be 0!
	dy: 5, //cannot be 0!
	radius: 15,
	diameter: 30,
	diameter_ext: 60
}

let sintmove = "";
let sintrend = "";
let sintupdt = "";
let sintmsgs = "";
let sinttime = "";
let sintspd = "";

function addintvals() {
	sintmove = setInterval(function() { move() }, fps);
	sintrend = setInterval(function() { render() }, fps);
	sintupdt = setInterval(function() { updateTable() }, 0);
	sintmsgs = setInterval(function() { clrmsg() }, 2000);
	sinttime = setInterval(function() { timer() }, 1000);
	sintspd = setInterval(function() { speed() }, 30000);
}

function remintvals() {
	clearInterval(sintmove);
	clearInterval(sintrend);
	clearInterval(sintupdt);
	clearInterval(sintspd);
	clearInterval(sintmsgs);
	clearInterval(sinttime);
}

function game() {
	max_score = document.getElementById('max_score').value;
	document.getElementById('messages').innerHTML = "";
	if (max_score <= 1 || max_score >= 100) {
        remintvals();
		stopGameError();
	} else {
		document.getElementById('stp').style.visibility = "visible";
		document.getElementById('edg').style.visibility = "visible";
		document.getElementById('sep').style.backgroundColor = '#ddd';
		addintvals();
	}

}
function render() { // also includes scoring system
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "#337ab7";
	ctx.fillRect(pad_l.left, pad_l.top, pad_l.width, pad_l.height);

	ctx.fillStyle = "#d9534f";
	ctx.fillRect(pad_r.left, pad_r.top, pad_r.width, pad_r.height);

	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();

	if (ball.x < 0) {
		document.getElementById('messages').innerHTML = red_score_message;
		red_score++;
		if (red_score == max_score) {
			remintvals();
			winner("red");

		}
		ball.dx = ball.dy = 5;
		ball.x = canvas.width / 2;
		ball.y = canvas.height / 2;
	}
	if (ball.x > canvas.width) {
		document.getElementById('messages').innerHTML = blue_score_message;
		blue_score++;
		if (blue_score == max_score) {
			remintvals();
			winner("blue");

		}
		ball.dx = ball.dy = -5;
		ball.x = canvas.width / 2;
		ball.y = canvas.height / 2;
	}
	if (ball.y <= 10 || ball.y >= (canvas.height - 10)) { ball.dy = -ball.dy; }
	if (ball.y >= (pad_r.top) && ball.y <= (pad_r.top + pad_r.height) && ball.x >= (pad_r.left)) {
		ball.x -= 10;
		if (keys.indexOf(38) != -1) { // ua
			if (ball.dy < 0) {
				ball.dy += -1 * s_sens; //ball up you up
			} else {
				ball.dy += -1 * a_sens; //ball down you up
			}
		} else {
			if (keys.indexOf(40) != -1) { // da
				if (ball.dy < 0) {
					ball.dy += a_sens; //ball up you down
				} else {
					ball.dy += s_sens; //ball down you down
				}	
			} 
		}
		ball.dx = -ball.dx;
		red_hits++;
	}
	if (ball.y >= (pad_l.top) && ball.y <= (pad_l.top + pad_l.height) && ball.x <= (pad_l.left + pad_l.width)) { 
		ball.x += 10;
		if (keys.indexOf(83) != -1) { // s
			if (ball.dy < 0) {
				ball.dy += a_sens; //ball up you down
			} else {
				ball.dy += s_sens; //ball down you down
			}
		} else {
			if (keys.indexOf(87) != -1) { // w
				if (ball.dy < 0) {
					ball.dy += -1 * s_sens; //ball up you up
				} else {
					ball.dy += -1 * a_sens; //ball down you up
				}
			} 
		}
		ball.dx = -ball.dx;
		blue_hits++;
	} 
	ball.x += ball.dx;
	ball.y += ball.dy;
}

function speed() {
	if (ball.dx < 0) {
		ball.dx--;
	} else {
		ball.dx++;
	}

	if (ball.dy < 0) {
		ball.dy--;
	} else {
		ball.dy++;
	}
	//console.log(ball.dx, ball.dy);
}

var keys = [];

function addHook(e) {
	if (keys.indexOf(e.keyCode) == -1) {
		keys[keys.length] = e.keyCode;
	}
	if (e.keyCode == 37) { //la
		if (pad_r.sensitivity > 1) {
			pad_r.sensitivity -= 1;
		}
	}
	if (e.keyCode == 39) { //ra
		if (pad_r.sensitivity < max_sensitivity) {
			pad_r.sensitivity += 1;
		}
	}
	if (e.keyCode == 68) { //d
		if (pad_l.sensitivity < max_sensitivity) {
			pad_l.sensitivity += 1;
		}
	}
	if (e.keyCode == 65) { //a
		if (pad_l.sensitivity > 1) {
			pad_l.sensitivity -= 1;
		}
	}
}

function remHook(e) {
	if (keys.indexOf(e.keyCode) != -1) {
		keys.splice(keys.indexOf(e.keyCode), 1);
	}
}

function updateTable() {
	document.getElementById('velocity').innerHTML = Math.abs(ball.dx);
	document.getElementById('blue_score').innerHTML = blue_score + " / " + max_score;
	document.getElementById('red_score').innerHTML = red_score + " / " + max_score;
	document.getElementById('blue_hits').innerHTML = blue_hits;
	document.getElementById('red_hits').innerHTML = red_hits;
	document.getElementById('blue_sens').innerHTML = pad_l.sensitivity;
	document.getElementById('red_sens').innerHTML = pad_r.sensitivity;
}

function move() {
	for (count = 0; count < keys.length; count++) {
		if (keys[count] == 83) { //s 
			if (pad_l.top < (canvas.height - pad_l.height)) {
				pad_l.top += pad_l.sensitivity;
			}
		}
		if (keys[count] == 87) { //w
			if (pad_l.top > 0) {
				pad_l.top -= pad_l.sensitivity;
			}
		}
		if (keys[count] == 40) { //da
			if (pad_r.top < (canvas.height - pad_r.height)) {
				pad_r.top += pad_r.sensitivity;
			}
		}
		if (keys[count] == 38) { //ua
			if (pad_r.top > 0) {
				pad_r.top -= pad_r.sensitivity;
			}
		}
	}
}

function clrmsg() {
	document.getElementById('messages').innerHTML = "";
}

document.body.addEventListener("keydown", addHook);
document.body.addEventListener("keyup", remHook);