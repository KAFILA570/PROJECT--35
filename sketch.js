//Create variables here

var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg;

function preload()
{
  //load images here
  
  happyDog = loadImage("images/doglmg.png");
  dog = loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(800, 700);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  drawSprites();
  //add styles here

}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0
  }else {

      x=x-1
    
    }
  }

  database.ref('/').update({
    Food:x
  })
