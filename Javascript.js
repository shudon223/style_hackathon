// JavaScript Fi/




var character=[];
var glasses=["http://www.clipartbest.com/cliparts/pi5/pK5/pi5pK54iB.png"];
var shoes = ["http://cliparts.co/cliparts/rcj/Kxy/rcjKxydLi.png"];
var shirts=["https://image.spreadshirtmedia.com/image-server/v1/products/20477385/views/1,width=378,height=378,appearanceId=63,version=1440417743/Cartoon-Wizard-T-Shirts.png","http://www.threadsquad.com/products/1000191.png"];
var pants=["http://www.englishexercises.org/makeagame/my_documents/my_pictures/2012/sep/789_clothes-pants.png","https://lh4.ggpht.com/o43b2VB6Dl-g75RD7D0Q2Mhb7aFzSKjGkq3TOPuKyJapxY6l6OhLd0jqYfE1Nsa5Z12y%3Dw300"];
var hats = ["http://cliparts.co/cliparts/kcM/nxA/kcMnxA4ki.png","http://www.clipartbest.com/cliparts/RcG/7kX/RcG7kXnai.png"];
function nextShoes(){
 var shoesi=0;
 
     
 }
 


var currentShoes;
var currentShirt;
var currentPants;
var currentCharacter;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}