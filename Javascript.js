$(document).ready(function() {
    var character=[];
var glasses=["Img/Glasses1.png","Img/Glasses2.png"];
var shoes = ["Img/shoes1.png","Img/shoes2.png"];
var shirts=["Img/shirt1.png","Img/shirt2.png"];
var pants=["Img/pants1.png"];
var hats = ["Img/hat1.png","Img/hat2.png"];
var robotpants=["Img/robotpants1.png","Img/Robotpants2.png"];
var robotshirts=["Img/robotshirt1.png","Img/robotshirt2.png"];
var robotshoes=["Img/robotshoes1.png","Img/robotshoes2.png"];

$(".pikachu .glasses").attr("src",glasses[0]);
$(".pikachu .hats").attr("src",hats[0]);

$(".human .glasses").attr("src",glasses[0]);
$(".human .shoes").attr("src",shoes[0]);
$(".human .shirts").attr("src",shirts[0]);
$(".human .pants").attr("src",pants[0]);
$(".human .hats").attr("src",hats[0]);

$(".robot .shoes").attr("src", robotshoes[0]);
$(".robot .shirts").attr("src", robotshirts[0]);
$(".robot .pants").attr("src", robotpants[0]);
var currentShoes;
var currentShirt;
var currentPants;
var currentCharacter;
function nextShoes(){
 currentShoes++;
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  };
}
});
 function 