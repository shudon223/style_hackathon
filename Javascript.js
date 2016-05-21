$(document).ready(function() {
var character=[];
var glasses=["Img/Glasses1.png","Img/Glasses2.png", "Img/glasses3.png"];
var shoes = ["Img/shoes1.png","Img/shoes2.png", "Img/shoes3.png"];
var shirts=["Img/shirt1.png","Img/shirt2.png"];
var pants=["Img/pants1.png", "Img/pants2.png", "Img/pants3.png"];
var hats = ["Img/hat1.png","Img/hat2.png","Img/hat3.png"];
// var robotpants=["Img/robotpants1.png","Img/Robotpants2.png"];
// var robotshirts=["Img/robotshirt1.png","Img/robotshirt2.png"];
// var robotshoes=["Img/robotshoes1.png","Img/robotshoes2.png"];

function update(){
// $(".pikachu .glasses").attr("src",glasses[0]);
// $(".pikachu .hats").attr("src",hats[0]);

$(".human .glasses").attr("src",glasses[currentGlasses]);
$(".human .shoes").attr("src",shoes[currentShoes]);
$(".human .shirts").attr("src",shirts[currentShirt]);
$(".human .pants").attr("src",pants[currentPants]);
$(".human .hats").attr("src",hats[currentHats]);
// $(".robot .shoes").attr("src", robotshoes[0]);
// $(".robot .shirts").attr("src", robotshirts[0]);
// $(".robot .pants").attr("src", robotpants[0]);
}
var currentShoes =0;
var currentShirt =0;
var currentPants =0;
var currentHats =0;
var currentGlasses =0;
var currentCharacter=0;
function nextShoes(){
 currentShoes++;
 if(currentShoes> shoes.length){
  currentShoes=0;
 }
 if(currentShoes<0){
  currentShoes=shoes.length;
 }
  update();
}
function nextShirt(){
 currentShirt++;

  if(currentShirt> shirts.length){
  currentShirt=0;
 }
 if(currentShirt<0){
  currentShirt=shirts.length;
 }
  update();
}
function nextPants(){
 currentPants++;
 if(currentPants> pants.length){
  currentPants=0;
 }
 if(currentPants<0){
  currentPants=pants.length;
 }
 update();
}
function nextGlasses(){
 currentGlasses++;

  if(currentGlasses> glasses.length){
  currentGlasses=0;
 }
 if(currentGlasses<0){
  currentGlasses=glasses.length;
 }
  update();
}

function nextHats(){
 currentHats++;
 
  if(currentHats> hats.length){
  currentHats=0;
  
 }
 if(currentHats<0){
  currentHats=hats.length;
  update();
 }
}

function prevShoes(){
 currentShoes--;

  if(currentShoes> shoes.length){
  currentShoes=0;
  
 }
 if(currentShoes<0){
  currentShoes=shoes.length;
 }
  update();
}
function prevShirt(){
 currentShirt--;

  if(currentShirt> shirts.length){
  currentShirt=0;
 }
 if(currentShirt<0){
  currentShirt=shirts.length;
  
 }
  update();
}
function prevPants(){
 currentPants--;

  if(currentPants> pants.length){
  currentPants=0;
 }
 if(currentPants<0){
  currentPants=pants.length;
 }
  update();
}
function prevGlasses(){
 currentGlasses--;
 
  if(currentGlasses> glasses.length){
  currentGlasses=0;
 }
 if(currentGlasses<0){
  currentGlasses=glasses.length;
 }
 update();
}
function prevHats(){
 currentHats--;
 
  if(currentHats> hats.length){
  currentHats=0;
 }
 if(currentHats<0){
  currentHats=hats.length;
 }
 update();
}
/*
$(".characterLeft").click(prevCharacter)
$(".characterRight").click( nextCharacter );*/

$("#shirtRight").click(nextShirt);
$("#shirtLeft").click(prevShirt);

$("#pantsRight").click(nextPants);
$("#pantsLeft").click(prevPants);

$("#shoesRight").click(nextShoes);
$("#shoesLeft").click(prevShoes);
/*
$("#hatsRight").click(nextHats);
$("#hatsleft").click(prevHats);

$("#glassesRight").click(nextGlasses);
$("#glassesLeft").click(prevGlasses);

*/

function checkArray(array,index){
if(index === array.length){
	index = 0;
} else if (index ===-1){
			index = array.length -1;
}
}
	



/*
accepts arr, index{
	if index = arr.length --> index =0 
	else if index = -1 --> index arr.length -1
	return index
}
*/



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  };
}

 
 // Put event listeners into place
//window.addEventListener("DOMContentLoaded", function() {
	// Grab elements, create settings, etc.
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		video = document.getElementById("video"),
		videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code); 
		};


	// Put video listeners into place
	if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function(stream){
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	
    }// Trigger photo take
  document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 200, 200);
  });
//}, false);

update();
});