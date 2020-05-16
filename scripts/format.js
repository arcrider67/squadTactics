//this script handles initial board layout 



document.getElementById("start").onclick=drawCanvas;
document.getElementById("square").onclick=drawSquare;


function drawCanvas(){
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.canvas.style  = "border:6px solid #282729"
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();
}

function drawSquare(x, y){

	x = 10
	y = 10

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0, 0, 150, 75);

}