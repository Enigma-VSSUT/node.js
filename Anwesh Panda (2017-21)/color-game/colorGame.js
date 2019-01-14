// alert("connected");
var numSquares = 6;
var colors = generateColors(6);
var pickedColor = generateNumber();
var squares=document.querySelectorAll(".square");
var rgb = document.getElementById("pickedColor");
var message = document.getElementById("message");
var header = document.getElementById("header");
var resetButton = document.getElementById("reset");
var easyMode = document.getElementById("easy");
var hardMode = document.getElementById("hard");
rgb.innerHTML= pickedColor;

easyMode.addEventListener("click",function(){
	hardMode.classList.remove("selected");
	easyMode.classList.add("selected");
	numSquares = 3;
	//generate three new colors
	colors = generateColors(numSquares);
	//select a random color in the array
	pickedColor = generateNumber();
	//change rgb to picked color
	rgb.innerHTML = pickedColor;
	//make 3 squares of colors in colors array and hide bottom 3 squares
	 for(var i=0;i<squares.length;i++){
	 	if(i>=colors.length){
	 		squares[i].style.display = "none";
	 	}
	 	else{
	 		squares[i].style.background = colors[i];
	 	}
	 }
})

hardMode.addEventListener("click",function(){
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	numSquares = 6;
	//generate six new colors
	colors = generateColors(numSquares);
	//select a random color in the array
	pickedColor = generateNumber();
	//change rgb to picked color
	rgb.innerHTML = pickedColor;
	//make 6 squares of colors in colors array 
	 for(var i=0;i<squares.length;i++){
	 	squares[i].style.display = "block";
	 	squares[i].style.background = colors[i];
	 }
})

resetButton.addEventListener("click",function(){
	
	//change text of button to New Color
	resetButton.innerHTML = "New Colors";
	//generate new random colors
	colors = generateColors(numSquares);
	//pick a random color from array 
	pickedColor = generateNumber();
	//change rgb to picked color
	rgb.innerHTML = pickedColor;
	//change colors of all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	//change background of headers to match backgound color of body
	header.style.background = "black";

	message.innerHTML = "";
})

for(var i=0;i < squares.length ;i++){
	//sets the initial color
	squares[i].style.background = colors[i];

	//adds event listeners
	squares[i].addEventListener("click" , function(){
		//this selects the rgb color of the clicked square
		var selectedColor = this.style.background;

		//this checks if selected color matches to the given rgb
		if(selectedColor === pickedColor){
			// console.log(selectedColor,pickedColor);
			message.innerHTML = "Correct!" ;
			resetButton.innerHTML = "Play Again!";
			changeColor(pickedColor);
		 	header.style.background = pickedColor;
		}
		else{
			this.style.background = "black";
			message.innerHTML = "Try Again"
		}

	})

}

function changeColor (color){
	//loop through all squares
	for(var i=0; i<squares.length;i++){
		//changes color of ever square to the correct color
		squares[i].style.background = color;
	} 
}

function generateNumber(){
	//generates a random color
	var random =Math.floor(Math.random() * colors.length) ;
	return colors[random];

}

function generateColors(len){
	//makes an array of colors
	var arr = [];
	for(var i=0;i<len;i++){
		// var red = Math.floor(Math.random() * 256);
		// var green = Math.floor(Math.random() * 256);
		// var blue = Math.floor(Math.random() * 256);
		// colors[i]=rgb(red, green, blue);
		arr[i]= generateRGB();
	}
	return arr;
}

function generateRGB(){
	//generate red from 0-255
	var r=Math.floor(Math.random() * 256);
	//generate green from 0-255
	var g=Math.floor(Math.random() * 256);
	//generate blue from 0-255
	var b=Math.floor(Math.random() * 256);
	//rgb(r, g, b);
	return "rgb(" + r +", " + g + ", " + b +")";
}

