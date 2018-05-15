var color =generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var h1 = document.querySelector("h1");
var numSquares = 6;
colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function()
{
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquares=3;
color = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
    if(color[i])
    {
    squares[i].style.background = color[i];
    }
    else{
    squares[i].style.display="none";
    }
}
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    color = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
    squares[i].style.background = color[i];
    squares[i].style.display="block";
}
});
resetButton.addEventListener("click", function(){
    this.textContent="New Colors";
    color =generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.background = color[i];
}
messageDisplay.textContent="";
h1.style.background = "steelblue";
});
for(var i=0; i<squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.background = color[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        console.log(clickedColor,pickedColor);
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent="Correct"
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            messageDisplay.textContent = "Try Again"
            this.style.background="#232323";
        }
    })
}
function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = color;
    }
}
function generateRandomColors(num)
{
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function pickColor()
{
    var random = Math.floor(Math.random()*color.length);
    return color[random];
}
function randomColor()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}