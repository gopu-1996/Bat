class Umbrella{
    constructor(x,y){
     var options={
         isStatic:true
     }
     this.imageA=[];
     this.image1=loadImage("images/Walking Frame/walking_1.png");
     this.image2=loadImage("images/Walking Frame/walking_2.png");
     this.image3=loadImage("images/Walking Frame/walking_3.png");
     this.image4=loadImage("images/Walking Frame/walking_4.png");
     this.image5=loadImage("images/Walking Frame/walking_5.png");
     this.image6=loadImage("images/Walking Frame/walking_6.png");
     this.image7=loadImage("images/Walking Frame/walking_7.png");
     this.image8=loadImage("images/Walking Frame/walking_8.png");
     this.imageA.push(this.image1);
     this.imageA.push(this.image2);
     this.imageA.push(this.image3);
     this.imageA.push(this.image4);
     this.imageA.push(this.image5);
     this.imageA.push(this.image6);
     this.imageA.push(this.image7);
     this.imageA.push(this.image8);
     this.index=0;

     this.body=Bodies.circle(x,y,50,options);
     this.r=50;
     World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.imageA[this.index],pos.x,pos.y+70,300,300);

        if(frameCount%10===0){
          this.index=(this.index+1)%7;
        }
    }
}