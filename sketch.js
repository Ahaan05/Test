var PLAY=1
var END=0

var gameState=1;

var sword,swordimg,fruit,fruit1,fruit2,fruit3,fruit4,monster,monsterimg;

var fruitgrp,enemygrp;

var score;
var gameoverimg;

function preload(){
  swordimg=loadImage("sword.png");
  
  monsterimg=loadAnimation("alien1.png","alien2.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  gameoverimg=loadImage("gameover.png");
 
}

function setup(){
  createCanvas(600,600);
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordimg);
  sword.setCollider("rectangle",0,0,40,40);
  
  score=0;
  enemygrp=new Group();
  fruitgrp=new Group();
}
function draw(){
background("lightblue");

  
  textSize(20);
  fill("white");
  text("Score:"+score,400,50);
  
  if(gameState===PLAY){
    enemy();
    fruits();
    sword.x=mouseX;
  sword.y=mouseY;
  
  
  if(fruitgrp.isTouching(sword)){
    fruitgrp.destroyEach();
    score=score+2;
  }
  else{
  if(enemygrp.isTouching(sword)){
    sword.addImage(gameoverimg);
    sword.x=200;
    sword.y=200;
    fruitgrp.destroyEach();
    enemygrp.destroyEach();
    fruitgrp.setVelocityEach(0);
    enemygrp.setVelocityEach(0);
    gameState=END;
  }
  }
  }
  drawSprites();
}

function enemy(){
  if(World.frameCount%180===0){
    monster=createSprite(600,200,10,10);
    monster.addAnimation("m",monsterimg);
    monster.y=Math.round(random(100,500))
    monster.velocityX=-8;
    monster.lifetime=75;
    enemygrp.add(monster);
  }
}

function fruits(){
  if(World.frameCount%100===0){
    fruit=createSprite(600,200,10,10);
    fruit.velocityX=-8;
    fruit.scale=0.2;
    fruit.setLifetime=100;
    fruit.y=Math.round(random(100,500));
    fruitgrp.add(fruit);
    var rand=Math.round(random(1,4));
    switch(rand){
      case 1: fruit.addImage(fruit1);
        break;
        
      case 2: fruit.addImage(fruit2);
        break;
      
      case 3: fruit.addImage(fruit3);
        break;
        
      case 4:fruit.addImage(fruit4);
        break;
        
      default:break;
        
    }
    
    
    
  }
  
}


