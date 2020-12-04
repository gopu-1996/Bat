const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var canvas;
var manWalking, man;
var thunder, thunderbolt;
var maxDrops=100;

var drops=[];

var thunderCreateFrame=0;

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   canvas=createCanvas(400,700);
    //canvas.position(10,20);
    engine = Engine.create();
    world = engine.world;

   umbrella=new Umbrella(200,500);

   if(frameCount%150===0){
 for (i=0; i<maxDrops;i++){
     drops.push(new Drops(random(0,400),random(0,400)));
    }
   } 

   
}

function draw(){
    Engine.update(engine);
    background("black");

    rand=Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreateFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10)
    switch(rand){
   case 1: thunder.addImage(thunder1);
   break;
   case 2: thunder.addImage(thunder2);
   break;
   case 3: thunder.addImage(thunder3);
   break;
   case 4: thunder.addImage(thunder4);
   break;
   default:break;
    }
    thunder.scale=random(0.3,0.6);
  }

  if(thunderCreateFrame+10===frameCount && thunder){
    thunder.destroy();
  }

  umbrella.display();
    
    for (i=0; i<maxDrops;i=i++){
        drops[i].display();
        drops[i].updateR();
       }

    drawSprites();
}   

