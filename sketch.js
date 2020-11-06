//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var readPosition, writeStock;


function preload()
{
 // database = firebase.database;
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
 
 
  
}

function setup() {

  database = firebase.database();

  createCanvas(500, 500);
  happyDog = createSprite("dogImg.png", 400,200);
  
  var foodStock=database.ref('Food/40');
   foodStock.on("value", readStock);
  
}


function draw() {
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage('dogImg.png');
  }


  drawSprites();

  text("Press the UP_ARROW key to feed the dog 1 milk bottle", 100,409);
  textSize(65);
  fill("500");

  //add styles here

}

function readStock(data) {
  foodS = data.val();


}

function writeStock(x) {

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
}
database.ref('/').update({
    Food:x
  })


//function showError(){
  //console.log("Error in writing to the database");
//}




