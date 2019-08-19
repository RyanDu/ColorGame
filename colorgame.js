var colorNum = 6;
var colors = generateRandom(6);
var displayColor = colorpicker();
var squares = document.querySelectorAll(".square");
var dp = document.querySelector("#dp");
var mess = document.querySelector("#message");
var h1 = document.querySelector("h1")
var res = document.querySelector("#res");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.backgroundColor = "rgb(252,157,154)";
	colorNum = 3;
	colors = generateRandom(colorNum);
	displayColor = colorpicker();
	dp.textContent = displayColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "rgb(252,157,154)";
	colorNum = 6;
	colors = generateRandom(colorNum);
	displayColor = colorpicker();
	dp.textContent = displayColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

dp.textContent = displayColor;
//function of every squares
res.addEventListener("click", function(){
	this.textContent = "New Color Set";
	mess.textContent = "";
	// reset colors array
	colors = generateRandom(colorNum);
	// reset the right answer
	displayColor = colorpicker();
	// reset the title of right answer
	dp.textContent = displayColor;
	// reset color displayed in squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "rgb(252,157,154)";

})

for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click",function(){
 		//Guess Correct
 		if(this.style.backgroundColor == displayColor){
 			mess.textContent = "Correct!"
 			changecolor(this.style.backgroundColor);
 			h1.style.backgroundColor = this.style.backgroundColor;
 			res.textContent = "Play Again?"
 		}
 		//guess wrong
 		else{
 			mess.textContent = "Try Again!"
 			this.style.backgroundColor = "#232323"
 		}
 	});
 }

// Change colors of all squares
 function changecolor(color){
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = color;
 	}
}
//Randomly choose a color from array as correct answer
function colorpicker(){
	return colors[Math.floor(Math.random()*colors.length)];
}
//generate an array that contains nums items
function generateRandom(nums){
	var arr = [];
	for(var i = 0; i < nums; i++){
		arr[i] = randomColor();

	}
	return arr;
}
// generate random color
function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb("+r+", "+g+", "+b+")"
}