var fixedrec, movingrec, objeto1, objeto2, objeto3


function setup() {
  createCanvas(1200,800);
  fixedrec = createSprite(600, 400, 50, 80);
   fixedrec.shapeColor = "red";
   fixedrec.debug = true;

   movingrec = createSprite(400, 200, 80, 30);
   movingrec.shapeColor = "green";
   movingrec.debug = true ;

   objeto1 = createSprite (100, 100, 50,50);
   objeto1.shapeColor = "green";

objeto2 = createSprite (200,100, 50, 50);
objeto2.shapeColor = "green";

objeto3 = createSprite (300, 100, 50, 50);
objeto3.shapeColor = "green";

  }

function draw() {
  background(255,255,255); 
  
  movingrec.x = World.mouseX
  movingrec.y = World.mouseY
  console.log (movingrec.x-fixedrec.x);

if (isTouching(movingrec, objeto3)){

movingrec.shapeColor = "purple"
objeto3.shapeColor = "purple"

}

else {

  objeto3.shapeColor = "green";
  movingrec.shapeColor = "green";

}

  drawSprites();
}

function isTouching(object1, object2){
 
  if (object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x-object1.x < object2.width/2 + object1.width/2
    && object1.y-object2.y < object2.width/2 + object1.width/2
    && object2.y-object1.y < object2.width/2 + object1.width/2) 
  {
    return true
  }
  else 
  {
    return false 
  }  

}