var GS=0;
var pc=0;
var form,player,game;
var database;
var allPlayers;
var cars,car1,car2,car3,car4;
var finishedPlayers=0;
var finish;
function preload(){
    /*
    track=loadImage("images/track.jpg");
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");
    bronzeimg=loadImage("images/bronze.png");
    goldimg=loadImage("images/gold.png");
    silverimg=loadImage("images/silver.png");
    */
   runner1img=loadAnimation("images/p1a.png","images/p1b.png","images/p1c.png");
   runner2img=loadAnimation("images/p2a.png","images/p2c.png","images/p2b.png");
   runner3img=loadAnimation("images/p3b.png","images/p3a.png","images/p3c.png");
   runner4img=loadAnimation("images/p4a.png","images/p4c.png","images/p4b.png");

   obstacleimg=loadImage("images/o1.png");
   trackimg=loadImage("images/track.jpg");
}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-100,displayHeight-220);
    runner1=createSprite(50,50);
    runner1.addAnimation("run",runner1img);

    runner2=createSprite(50,150);
    runner2.addAnimation("running",runner2img);

    runner3=createSprite(50,300);
    runner3.addAnimation("runner",runner3img);
    runner3.scale=0.5;

    runner4=createSprite(50,500);
    runner4.addAnimation("runs",runner4img);
    runner4.scale=0.26;

    /*
    game = new Game();
    game.getState();
    game.start();
    */
   }

function draw(){
    background("white");
    drawSprites();
    /*
   if(pc===4&&finishedPlayers===0){
       game.updateGS(1)
   }
   if(GS===1){
       clear();
       game.play();
   }
   if(finishedPlayers===4){
       game.updateGS(2);
   }
   if(GS===2&&finishedPlayers===4){
      // game.end();
       game.displayRank();
   }
*/
}

