//character varaibles
var player, dino1, dino2, dino3, dino4, boss;

//character aniamations
var player_img, player_run_img, player_dead_img, player_jump_img, boss_run, boss_dead;

//hidden dino varaibles
var dino1Img, dino2Img, dino3Img, dino4Img;
var dinoHead1, dinoHead2, dinoHead3, dinoHead4

//lvl 3 dinos
var dino_1, dino_2, dino_3, dino_4, dino_5, dino_6, dino_7, dino_8, dino_9, dino_10;
var dinoHead_1, dinoHead_2, dinoHead_3, dinoHead_4, dinoHead_5, dinoHead_6, dinoHead_7, dinoHead_8, dinoHead_9, dinoHead_10;
var dino_1Bounce = 0;
var dino_2Bounce = 0;
var dino_3Bounce = 0;
var dino_4Bounce = 0;
var dino_5Bounce = 0;
var dino_6Bounce = 0;
var dino_7Bounce = 0;
var dino_8Bounce = 0;
var dino_9Bounce = 0;
var dino_10Bounce = 0;

var dino_1BounceMirror = 0;
var dino_2BounceMirror = 0;
var dino_3BounceMirror= 0;
var dino_4BounceMirror = 0;
var dino_5BounceMirror = 0;
var dino_6BounceMirror = 0;
var dino_7BounceMirror = 0;
var dino_8BounceMirror = 0;
var dino_9BounceMirror = 0;
var dino_10BounceMirror = 0;

var bgImage, bgImage2, bgImage3, bgImage4;
var ground, story, ground1, stageEnd1, stageEnd2, boundryUp, boundryLeft, boundryRight;
var platform1,platform2,platform3,platform1inv,platform2inv,platform3inv;
var platformImg, platformImg2, stagePlatform, stagePlatform1, stagePlatform2, stagePlatforminv1, stagePlatform2inv, stagePlatformImg;
var dinoBounceRight, dinoBounceLeft, dinoHeadBounceRight, dinoHeadBounceLeft, dinoBounceRightStart, dinoBounceLeftStart, dinoMirrorRight, dinoMirrorLeft;
var bossBounceLeft;
var wallBounceLeft, wallBounceLeft;
var lifeTimeTestTop, lifeTimeTestBottom, lifeTimeTestCollide;
var gameState = "start";

var placeHolder2 = 0;
var stage = 1;
var stageNeed = 1;
var jumpCounter = 0;
var maxJump = 1;
var jumpStop = 0;
var dinoCounter = 0;
var bossBounce = 0;
var wallBounceCounter = 0;

var ability1 = 0, ability2 = 0, ability3, ability4;
var abilityItem1, abilityItem2, abilityItem3, abilityItem4;
var abilityItem1Img, abilityItem2Img, abilityItem3Img, abilityItem4Img;

function preload(){
  bgImage = loadImage("backgrounds/Main-Menu.jpg");
  bgImage2 = loadImage("backgrounds/beach.PNG");
  bgImage3 = loadImage("backgrounds/boneBeach.PNG");
  bgImage4 = loadImage("backgrounds/cave.PNG");
  platformImg = loadImage("backgrounds/platform.png")
  stagePlatformImg = loadImage("backgrounds/stagePlatform.png")
  
  player_img= loadAnimation("flatboy/Idle1.png","flatboy/Idle2.png","flatboy/Idle3.png","flatboy/Idle4.png",
    "flatboy/Idle5.png","flatboy/Idle6.png","flatboy/Idle7.png","flatboy/Idle8.png","flatboy/Idle9.png",
    "flatboy/Idle10.png","flatboy/Idle11.png","flatboy/Idle12.png","flatboy/Idle13.png","flatboy/Idle14.png",
    "flatboy/Idle15.png")

  player_dead_img= loadAnimation("flatboy/Dead1.png","flatboy/Dead2.png","flatboy/Dead3.png","flatboy/Dead4.png",
    "flatboy/Dead5.png","flatboy/Dead6.png","flatboy/Dead7.png","flatboy/Dead8.png","flatboy/Dead9.png",
    "flatboy/Dead10.png","flatboy/Dead11.png","flatboy/Dead12.png","flatboy/Dead13.png")

  player_run_img= loadAnimation("flatboy/Run1.png","flatboy/Run2.png","flatboy/Run3.png","flatboy/Run4.png",
    "flatboy/Run5.png","flatboy/Run6.png","flatboy/Run7.png","flatboy/Run8.png","flatboy/Run9.png",
    "flatboy/Run10.png","flatboy/Run11.png","flatboy/Run12.png","flatboy/Run13.png","flatboy/Run14.png",
    "flatboy/Run15.png")

  player_jump_img= loadAnimation("flatboy/Jump1.png","flatboy/Jump2.png","flatboy/Jump3.png","flatboy/Jump4.png",
    "flatboy/Jump5.png","flatboy/Jump6.png","flatboy/Jump7.png","flatboy/Jump8.png","flatboy/Jump9.png",
    "flatboy/Jump10.png","flatboy/Jump11.png","flatboy/Jump12.png","flatboy/Jump13.png","flatboy/Jump14.png",
    "flatboy/Jump15.png")

    boss_run= loadAnimation("freedinosprite/png/Run (1).png","freedinosprite/png/Run (2).png","freedinosprite/png/Run (3).png",
    "freedinosprite/png/Run (4).png","freedinosprite/png/Run (5).png","freedinosprite/png/Run (6).png", 
    "freedinosprite/png/Run (7).png","freedinosprite/png/Run (8).png")
    
    boss_dead= loadAnimation("freedinosprite/png/Dead (1).png","freedinosprite/png/Dead (2).png","freedinosprite/png/Dead (3).png",
    "freedinosprite/png/Dead (4).png","freedinosprite/png/Dead (5).png","freedinosprite/png/Dead (6).png",
    "freedinosprite/png/Dead (7).png","freedinosprite/png/Dead (8).png")

  dino1Img = loadAnimation("Mini-Dinos/DinoSprites_doux-0/0.png","Mini-Dinos/DinoSprites_doux-0/1.png","Mini-Dinos/DinoSprites_doux-0/2.png",
    "Mini-Dinos/DinoSprites_doux-0/3.png","Mini-Dinos/DinoSprites_doux-0/4.png","Mini-Dinos/DinoSprites_doux-0/5.png","Mini-Dinos/DinoSprites_doux-0/6.png",
    "Mini-Dinos/DinoSprites_doux-0/7.png","Mini-Dinos/DinoSprites_doux-0/8.png","Mini-Dinos/DinoSprites_doux-0/9.png",
    "Mini-Dinos/DinoSprites_doux-0/10.png","Mini-Dinos/DinoSprites_doux-0/11.png","Mini-Dinos/DinoSprites_doux-0/12.png","Mini-Dinos/DinoSprites_doux-0/13.png",
    "Mini-Dinos/DinoSprites_doux-0/14.png")  

  dino2Img = loadAnimation("Mini-Dinos/DinoSprites_mort-0/0.png","Mini-Dinos/DinoSprites_mort-0/1.png","Mini-Dinos/DinoSprites_mort-0/2.png",
    "Mini-Dinos/DinoSprites_mort-0/3.png","Mini-Dinos/DinoSprites_mort-0/4.png","Mini-Dinos/DinoSprites_mort-0/5.png","Mini-Dinos/DinoSprites_mort-0/6.png",
    "Mini-Dinos/DinoSprites_mort-0/7.png","Mini-Dinos/DinoSprites_mort-0/8.png","Mini-Dinos/DinoSprites_mort-0/9.png",
    "Mini-Dinos/DinoSprites_mort-0/10.png","Mini-Dinos/DinoSprites_mort-0/11.png","Mini-Dinos/DinoSprites_mort-0/12.png","Mini-Dinos/DinoSprites_mort-0/13.png",
    "Mini-Dinos/DinoSprites_mort-0/14.png") 

  dino3Img = loadAnimation("Mini-Dinos/DinoSprites_tard-0/0.png","Mini-Dinos/DinoSprites_tard-0/1.png","Mini-Dinos/DinoSprites_tard-0/2.png",
    "Mini-Dinos/DinoSprites_tard-0/3.png","Mini-Dinos/DinoSprites_tard-0/4.png","Mini-Dinos/DinoSprites_tard-0/5.png","Mini-Dinos/DinoSprites_tard-0/6.png",
    "Mini-Dinos/DinoSprites_tard-0/7.png","Mini-Dinos/DinoSprites_tard-0/8.png","Mini-Dinos/DinoSprites_tard-0/9.png",
    "Mini-Dinos/DinoSprites_tard-0/10.png","Mini-Dinos/DinoSprites_tard-0/11.png","Mini-Dinos/DinoSprites_tard-0/12.png","Mini-Dinos/DinoSprites_tard-0/13.png",
    "Mini-Dinos/DinoSprites_tard-0/14.png") 

  dino4Img = loadAnimation("Mini-Dinos/DinoSprites_vita-0/0.png","Mini-Dinos/DinoSprites_vita-0/1.png","Mini-Dinos/DinoSprites_vita-0/2.png",
    "Mini-Dinos/DinoSprites_vita-0/3.png","Mini-Dinos/DinoSprites_vita-0/4.png","Mini-Dinos/DinoSprites_vita-0/5.png","Mini-Dinos/DinoSprites_vita-0/6.png",
    "Mini-Dinos/DinoSprites_vita-0/7.png","Mini-Dinos/DinoSprites_vita-0/8.png","Mini-Dinos/DinoSprites_vita-0/9.png",
    "Mini-Dinos/DinoSprites_vita-0/10.png","Mini-Dinos/DinoSprites_vita-0/11.png","Mini-Dinos/DinoSprites_vita-0/12.png","Mini-Dinos/DinoSprites_vita-0/13.png",
    "Mini-Dinos/DinoSprites_vita-0/14.png")   

  abilityItem1Img = loadAnimation("Coins/Blue/blueCoin1.png","Coins/Blue/blueCoin2.png","Coins/Blue/blueCoin3.png",
    "Coins/Blue/blueCoin4.png","Coins/Blue/blueCoin5.png","Coins/Blue/blueCoin6.png")

  abilityItem2Img = loadAnimation("Coins/Bronze/bronzeCoin1.png","Coins/Bronze/bronzeCoin2.png","Coins/Bronze/bronzeCoin3.png",
    "Coins/Bronze/bronzeCoin4.png","Coins/Bronze/bronzeCoin5.png","Coins/Bronze/bronzeCoin6.png")

  abilityItem3Img = loadAnimation("Coins/Gold/goldCoin1.png","Coins/Gold/goldCoin2.png","Coins/Gold/goldCoin3.png",
    "Coins/Gold/goldCoin4.png","Coins/Gold/goldCoin5.png","Coins/Gold/goldCoin6.png")

  abilityItem4Img= loadAnimation("Coins/Silver/silverCoin1.png","Coins/Silver/silverCoin2.png","Coins/Silver/silverCoin3.png",
    "Coins/Silver/silverCoin4.png","Coins/Silver/silverCoin5.png","Coins/Silver/silverCoin6.png")

}

function setup() {
  createCanvas(displayWidth-70,displayHeight-180);
  background("lightblue")

  dinoSpawn()

  //technicall sprites
  ground = createSprite((displayWidth-70)/2,displayHeight-320, displayWidth*3, 30)
  ground1 = createSprite((displayWidth-70)/2,displayHeight-320.00000000000009, displayWidth, 30)
  stageEnd1 = createSprite(displayWidth-100,displayHeight-450)

  boundryLeft = createSprite((displayWidth-displayWidth)-250,displayHeight/2,500,displayHeight)
  boundryRight = createSprite(displayWidth+250,displayHeight/2,500,displayHeight)
  boundryUp = createSprite(displayWidth/2,-400,displayWidth,500)

  ground.visible = false
  ground1.visible = false
  stageEnd1.visible = false
  boundryLeft.visible = false
  boundryRight.visible = false
  boundryUp.visible = false

  story = createSprite((displayWidth-70)/2,(displayHeight-180)/2, 600, 600)
  story.shapeColor = "black"

  //player 
  player = createSprite(300, 400, 50, 50);
  player.addAnimation("Idle", player_img);
  player.addAnimation("Run", player_run_img);
  player.addAnimation("Jump", player_jump_img);
  player.addAnimation("dead",  player_dead_img);
  player.setCollider("rectangle", -180, 0, 200, 450)
  player.scale = 0.45

 


}

function draw() {
  background("lightblue")
  if(stage == 1){
    image(bgImage,0,0,displayWidth-70,displayHeight-180)
  } else if(stage == 2){
    image(bgImage2,0,0,displayWidth-70,displayHeight-180)
  } else if (stage == 3){
    image(bgImage3,0,0,displayWidth-70,displayHeight-180)
  } else if (stage == 4){
    image(bgImage4,0,0,displayWidth-70,displayHeight-180)
  }

  //functions
  drawSprites();
  playerAttack();
  dinoAttack();
  collide();
  movement();

  

  if(gameState == "start"){
    textSize(30);
    fill(0, 102, 153);
    text('A boy was once at a party with his friends.', 640, 190);
    text('A boy was once at a party with his friends.', 640, 190);
    text('While he was getting some wood for the fire', 640, 240);
    text('While he was getting some wood for the fire', 640, 240);
    text(', he heard screams coming from the forest.', 640, 290);
    text(', he heard screams coming from the forest.', 640, 290);
    text('Everyone at the party had been infected', 640, 340);
    text('Everyone at the party had been infected', 640, 340);
    text('his friends. Help the boy find the cause of', 640, 390);
    text('his friends. Help the boy find the cause of', 640, 390);
    text('the problem by solving various problems', 640, 440);
    text('the problem by solving various problems', 640, 440);
    text('and defeating the boss. Good luck.', 640, 490);
    text('and defeating the boss. Good luck.', 640, 490);

  }

  //the console
  console.log()
  
  

}

function Boss(){

}

function collide(){
  player.collide(ground)
  player.collide(boundryLeft)
  player.collide(boundryRight)
  player.collide(boundryUp)

  if(stage == 2){
    player.collide(platform1)
    player.collide(platform2)
    player.collide(platform3)
  }
  if(stage == 3){
    player.collide(stagePlatform1)
    player.collide(stagePlatform2)

  }
  if(stage == 4){
    boss.bounceOff(boundryLeft)
    boss.bounceOff(boundryRight)
  }
}