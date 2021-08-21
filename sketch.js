var scImg, issImg, bgImg;
var spaceCraft ;
var iss, issBody;
var hasDocked= false;

function preload()
{
	scImg = loadImage("images/spacecraft1.png");
	scUp= loadImage("images/spacecraft2.png");
	scLeft= loadImage("images/spacecraft3.png");
	scRight= loadImage("images/spacecraft4.png");
	issImg = loadImage("images/iss.png");
	bgImg = loadImage("images/spacebg.jpg");

}

function setup() {
	createCanvas(800, 600);


	spaceCraft = createSprite(130, 520);
	spaceCraft.addImage(scImg);  
	spaceCraft.scale =0.25;

	iss = createSprite(450,170);
	iss.addImage(issImg);
	iss.scale = 0.8;

}


function draw() {
  background(bgImg);



	if(!hasDocked){
      spaceCraft.x= spaceCraft.x+random(-1,1);
	  
	if(keyDown("RIGHT_ARROW")){
		spaceCraft.addImage(scRight);
		spaceCraft.x+=5;
    
	}

	if(keyDown("LEFT_ARROW")){
		spaceCraft.addImage(scLeft);
		spaceCraft.x-=5;
	}

	if(keyDown("DOWN_ARROW")){
		spaceCraft.addImage(scImg);
		spaceCraft.y+=5;
	}

  if(keyDown("UP_ARROW")){
	spaceCraft.addImage(scUp);
		spaceCraft.y-=5;
	}
	}

	if(spaceCraft.y<=(iss.y+100) && spaceCraft.x<=(iss.x-13)){
      hasDocked=true
	  textSize(25);
	  fill("white");
	  text("Docking successful! ", 300, 500);
    //   console.log("hasDocked!");
	}




  drawSprites();

}
