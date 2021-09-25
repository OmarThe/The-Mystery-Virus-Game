function dinoAttack(){
    if(dinoHead1.isTouching(player) ){
        dino1.destroy()
        dinoHead1.destroy()
        jumpCounter = 0
        player.velocityY = -10
    }

    if(dinoHead2.isTouching(player) ){
        dino2.destroy()
        dinoHead2.destroy()
        jumpCounter = 0
        player.velocityY = -10
    }

    if(dinoHead3.isTouching(player) ){
        dino3.destroy()
        dinoHead3.destroy()
        jumpCounter = 0
        player.velocityY = -10
    }

    if(dinoHead4.isTouching(player) ){
        dino4.destroy()
        dinoHead4.destroy()
        jumpCounter = 0
        player.velocityY = -10
    }
}

function playerAttack(){
    if(player.isTouching(dino1)){
        dinoHead1.destroy()
        player.lifetime = 25
        dino1.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino2)){
        dinoHead2.destroy()
        player.lifetime = 25
        dino2.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino3)){
        dinoHead3.destroy()
        player.lifetime = 25
        dino3.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino4)){
        dinoHead4.destroy()
        player.lifetime = 25
        dino4.velocityX = -6.1
        placeHolder2 = 1
    }
}


function dinoAttack2(){
    if(dinoHead_1.isTouching(player) ){
        dino_1.destroy()
        dinoHead_1.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_2.isTouching(player) ){
        dino_2.destroy()
        dinoHead_2.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_3.isTouching(player) ){
        dino_3.destroy()
        dinoHead_3.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_4.isTouching(player) ){
        dino_4.destroy()
        dinoHead_4.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_5.isTouching(player) ){
        dino_5.destroy()
        dinoHead_5.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_6.isTouching(player) ){
        dino_6.destroy()
        dinoHead_6.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_7.isTouching(player) ){
        dino_7.destroy()
        dinoHead_7.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_8.isTouching(player) ){
        dino_8.destroy()
        dinoHead_8.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_9.isTouching(player) ){
        dino_9.destroy()
        dinoHead_9.destroy()
        dinoCounter = dinoCounter + 1;
    }

    if(dinoHead_10.isTouching(player) ){
        dino_10.destroy()
        dinoHead_10.destroy()
        dinoCounter = dinoCounter + 1;
    }
}




function playerAttack2(){
    if(player.isTouching(dino_1)){
        dinoHead_1.destroy()
        player.lifetime = 25
        dino_1.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_2)){
        dinoHead_2.destroy()
        player.lifetime = 25
        dino_2.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_3)){
        dinoHead_3.destroy()
        player.lifetime = 25
        dino_3.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_4)){
        dinoHead_4.destroy()
        player.lifetime = 25
        dino_4.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_5)){
        dinoHead_5.destroy()
        player.lifetime = 25
        dino_5.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_6)){
        dinoHead_6.destroy()
        player.lifetime = 25
        dino_6.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_7)){
        dinoHead_7.destroy()
        player.lifetime = 25
        dino_7.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_8)){
        dinoHead_8.destroy()
        player.lifetime = 25
        dino_8.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_9)){
        dinoHead_9.destroy()
        player.lifetime = 25
        dino_9.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino_10)){
        dinoHead_10.destroy()
        player.lifetime = 25
        dino_10.velocityX = -6.1
        placeHolder2 = 1
    }
}



function DinoMirror(){
    if((dino_1.isTouching(dinoMirrorRight) || dino_1.isTouching(dinoMirrorLeft)) && dino_1BounceMirror%2 == 0){
        dino_1.mirrorX(1)
        
    }else if((dino_1.isTouching( dinoMirrorRight) || dino_1.isTouching(dinoMirrorLeft)) && dino_1BounceMirror%2 == !0){
        dino_1.mirrorX(-1)
    }

    if((dino_2.isTouching( dinoMirrorRight) || dino_2.isTouching(dinoMirrorLeft)) && dino_2BounceMirror%2 == 0){
        dino_2.mirrorX(1)
        
    }else if((dino_2.isTouching( dinoMirrorRight) || dino_2.isTouching(dinoMirrorLeft)) && dino_2BounceMirror%2 == !0){
        dino_2.mirrorX(-1)
    }
    
    if((dino_3.isTouching( dinoMirrorRight) || dino_3.isTouching(dinoMirrorLeft)) && dino_3BounceMirror%2 == 0){
        dino_3.mirrorX(1)
        
    }else if((dino_3.isTouching( dinoMirrorRight) || dino_3.isTouching(dinoMirrorLeft)) && dino_3BounceMirror%2 == !0){
        dino_3.mirrorX(-1)
    }

    if((dino_4.isTouching( dinoMirrorRight) || dino_4.isTouching(dinoMirrorLeft)) && dino_4BounceMirror%2 == 0){
        dino_4.mirrorX(1)
        
    }else if((dino_4.isTouching( dinoMirrorRight) || dino_4.isTouching(dinoMirrorLeft)) && dino_4BounceMirror%2 == !0){
        dino_4.mirrorX(-1)
    }

    if((dino_5.isTouching( dinoMirrorRight) || dino_5.isTouching(dinoMirrorLeft)) && dino_5BounceMirror%2 == 0){
        dino_5.mirrorX(1)
        
    }else if((dino_5.isTouching( dinoMirrorRight) || dino_5.isTouching(dinoMirrorLeft)) && dino_5BounceMirror%2 == !0){
        dino_5.mirrorX(-1)
    }

    if((dino_6.isTouching( dinoMirrorRight) || dino_6.isTouching(dinoMirrorLeft)) && dino_6BounceMirror%2 == 0){
        dino_6.mirrorX(-1)
        
    }else if((dino_6.isTouching( dinoMirrorRight) || dino_6.isTouching(dinoMirrorLeft)) && dino_6BounceMirror%2 == !0){
        dino_6.mirrorX(1)
    }

    if((dino_7.isTouching( dinoMirrorRight) || dino_7.isTouching(dinoMirrorLeft)) && dino_7BounceMirror%2 == 0){
        dino_7.mirrorX(-1)
        
    }else if((dino_7.isTouching( dinoMirrorRight) || dino_7.isTouching(dinoMirrorLeft)) && dino_7BounceMirror%2 == !0){
        dino_7.mirrorX(1)
    }
    
    if((dino_8.isTouching( dinoMirrorRight) || dino_8.isTouching(dinoMirrorLeft)) && dino_8BounceMirror%2 == 0){
        dino_8.mirrorX(-1)
        
    }else if((dino_8.isTouching( dinoMirrorRight) || dino_8.isTouching(dinoMirrorLeft)) && dino_8BounceMirror%2 == !0){
        dino_8.mirrorX(1)
    }
    
    if((dino_9.isTouching( dinoMirrorRight) || dino_9.isTouching(dinoMirrorLeft)) && dino_9BounceMirror%2 == 0){
        dino_9.mirrorX(-1)
        
    }else if((dino_9.isTouching( dinoMirrorRight) || dino_9.isTouching(dinoMirrorLeft)) && dino_9BounceMirror%2 == !0){
        dino_9.mirrorX(1)
    }

    if((dino_10.isTouching( dinoMirrorRight) || dino_10.isTouching(dinoMirrorLeft)) && dino_10BounceMirror%2 == 0){
        dino_10.mirrorX(-1)
        
    }else if((dino_10.isTouching(dinoMirrorRight) || dino_10.isTouching(dinoMirrorLeft)) && dino_10BounceMirror%2 == !0){
        dino_10.mirrorX(1)
    }
    
}

function dinoMirrorSet(){
    if(dino_1.isTouching(dinoBounceRightStart)){
        dino_1Bounce = 1
    }

    if(dino_2.isTouching(dinoBounceRightStart)){
        dino_2Bounce = 1
    }

    if(dino_3.isTouching(dinoBounceRightStart)){
        dino_3Bounce = 1
    }

    if(dino_4.isTouching(dinoBounceRightStart)){
        dino_4Bounce = 1
    }

    if(dino_5.isTouching(dinoBounceRightStart)){
        dino_5Bounce = 1
    }

    if(dino_6.isTouching(dinoBounceLeftStart)){
        dino_6Bounce = 1
    }

    if(dino_7.isTouching(dinoBounceLeftStart)){
        dino_7Bounce = 1
    }

    if(dino_8.isTouching(dinoBounceLeftStart)){
        dino_8Bounce = 1
    }

    if(dino_9.isTouching(dinoBounceLeftStart)){
        dino_9Bounce = 1
    }

    if(dino_10.isTouching(dinoBounceLeftStart)){
        dino_10Bounce = 1
    }

    

    if(dino_1.isTouching(dinoMirrorRight)){
        // dino_1.mirrorX(1)
        dino_1BounceMirror + 1;
    }

    if(dino_2.isTouching(dinoMirrorRight)){
        // dino_2.mirrorX(1)
        dino_2BounceMirror + 1;
    }

    if(dino_3.isTouching(dinoMirrorRight)){
        // dino_3.mirrorX(1)
        dino_3BounceMirror + 1;
    }

    if(dino_4.isTouching(dinoMirrorRight)){
        // dino_4.mirrorX(1)
        dino_4BounceMirror + 1;
    }

    if(dino_5.isTouching(dinoMirrorRight)){
        // dino_5.mirrorX(1)
        dino_5BounceMirror + 1;
    }

    if(dino_6.isTouching(dinoMirrorRight)){
        // dino_6.mirrorX(1)
        dino_6BounceMirror + 1;
    }

    if(dino_7.isTouching(dinoMirrorRight)){
        // dino_7.mirrorX(1)
        dino_7BounceMirror + 1;
    }

    if(dino_8.isTouching(dinoMirrorRight)){
        // dino_8.mirrorX(1)
        dino_8BounceMirror + 1;
    }

    if(dino_9.isTouching(dinoMirrorRight)){
        // dino_9.mirrorX(1)
        dino_9BounceMirror + 1;
    }

    if(dino_10.isTouching(dinoMirrorRight)){
        // dino_10.mirrorX(1)
        dino_10BounceMirror + 1;
    }

    if(dino_1.isTouching(dinoMirrorLeft)){
        // dino_1.mirrorX(-1)
        dino_1BounceMirror + 1;
    }

    if(dino_2.isTouching(dinoMirrorLeft)){
        // dino_2.mirrorX(-1)
        dino_2BounceMirror + 1;
    }

    if(dino_3.isTouching(dinoMirrorLeft)){
        // dino_3.mirrorX(-1)
        dino_3BounceMirror + 1;
    }

    if(dino_4.isTouching(dinoMirrorLeft)){
        // dino_4.mirrorX(-1)
        dino_4BounceMirror + 1;
    }

    if(dino_5.isTouching(dinoMirrorLeft)){
        // dino_5.mirrorX(-1)
        dino_5BounceMirror + 1;
    }

    if(dino_6.isTouching(dinoMirrorLeft)){
        // dino_6.mirrorX(-1)
        dino_6BounceMirror + 1;
    }

    if(dino_7.isTouching(dinoMirrorLeft)){
        // dino_7.mirrorX(-1)
        dino_7BounceMirror + 1;
    }

    if(dino_8.isTouching(dinoMirrorLeft)){
        // dino_8.mirrorX(-1)
        dino_8BounceMirror + 1;
    }

    if(dino_9.isTouching(dinoMirrorLeft)){
        // dino_9.mirrorX(-1)
        dino_9BounceMirror + 1;
    }

    if(dino_10.isTouching(dinoMirrorLeft)){
        // dino_10.mirrorX(-1)
        dino_10BounceMirror + 1;
    }
}

function dinoBounce(){
    if(dino_1Bounce == 1){
        dino_1.bounceOff(dinoBounceRight)
        dino_1.bounceOff(dinoBounceLeft)
        dinoHead_1.bounceOff(dinoHeadBounceRight)
        dinoHead_1.bounceOff(dinoHeadBounceLeft)
        
    }

    if(dino_2Bounce == 1){
        dino_2.bounceOff(dinoBounceRight)
        dino_2.bounceOff(dinoBounceLeft)
        dinoHead_2.bounceOff(dinoHeadBounceRight)
        dinoHead_2.bounceOff(dinoHeadBounceLeft)
        
    }

    if(dino_3Bounce == 1){
        dino_3.bounceOff(dinoBounceRight)
        dino_3.bounceOff(dinoBounceLeft)
        dinoHead_3.bounceOff(dinoHeadBounceRight)
        dinoHead_3.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_4Bounce == 1){
        dino_4.bounceOff(dinoBounceRight)
        dino_4.bounceOff(dinoBounceLeft)
        dinoHead_4.bounceOff(dinoHeadBounceRight)
        dinoHead_4.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_5Bounce == 1){
        dino_5.bounceOff(dinoBounceRight)
        dino_5.bounceOff(dinoBounceLeft)
        dinoHead_5.bounceOff(dinoHeadBounceRight)
        dinoHead_5.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_6Bounce == 1){
        dino_6.bounceOff(dinoBounceRight)
        dino_6.bounceOff(dinoBounceLeft)
        dinoHead_6.bounceOff(dinoHeadBounceRight)
        dinoHead_6.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_7Bounce == 1){
        dino_7.bounceOff(dinoBounceRight)
        dino_7.bounceOff(dinoBounceLeft)
        dinoHead_7.bounceOff(dinoHeadBounceRight)
        dinoHead_7.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_8Bounce == 1){
        dino_8.bounceOff(dinoBounceRight)
        dino_8.bounceOff(dinoBounceLeft)
        dinoHead_8.bounceOff(dinoHeadBounceRight)
        dinoHead_8.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_9Bounce == 1){
        dino_9.bounceOff(dinoBounceRight)
        dino_9.bounceOff(dinoBounceLeft)
        dinoHead_9.bounceOff(dinoHeadBounceRight)
        dinoHead_9.bounceOff(dinoHeadBounceLeft)
    }

    if(dino_10Bounce == 1){
        dino_10.bounceOff(dinoBounceRight)
        dino_10.bounceOff(dinoBounceLeft)
        dinoHead_10.bounceOff(dinoHeadBounceRight)
        dinoHead_10.bounceOff(dinoHeadBounceLeft)
    }
}

function dinoSpawn(){
    //dino minions
  dino1 = createSprite(displayWidth+100,700, 50, 50);
  dinoHead1 = createSprite(dino1.x, dino1.y-20, 40, 70);
  // dinoHead1.visible = false;
  dino1.scale = 6
  dino1.mirrorX(-1)
  dino1.addAnimation("move", dino1Img)
  dino1.debug = true
  dino1.setCollider("rectangle", 0,0, 10, 10)

  dino2 = createSprite(displayWidth+500,700, 50, 50);
  dinoHead2 = createSprite(dino2.x, dino2.y-20, 40, 70);
  //dinoHead2.visible = false;
  dino2.scale = 6
  dino2.mirrorX(-1)
  dino2.addAnimation("move", dino2Img)
  dino2.debug = true
  dino2.setCollider("rectangle", 0,0, 10, 10)

  dino3 = createSprite(displayWidth+900,700, 50, 50);
  dinoHead3 = createSprite(dino3.x, dino3.y-20, 40, 70);
  //dinoHead3.visible = false;
  dino3.scale = 6
  dino3.mirrorX(-1)
  dino3.addAnimation("move", dino3Img)
  dino3.debug = true
  dino3.setCollider("rectangle", 0,0, 10, 10)

  dino4 = createSprite(displayWidth+1300,700, 50, 50);
  dinoHead4 = createSprite(dino4.x, dino4.y-20, 40, 70);
  //dinoHead4.visible = false;
  dino4.scale = 6
  dino4.mirrorX(-1)
  dino4.addAnimation("move", dino4Img)
  dino4.debug = true
  dino4.setCollider("rectangle", 0,0, 10, 10)

  // Moving Left
  dino_1 = createSprite((displayWidth)+100,700, 50, 50);
  dinoHead_1 = createSprite(dino_1.x, dino_1.y-20, 40, 70);
  //dinoHead_1.visible = false;
  dino_1.scale = 6
  dino_1.mirrorX(-1)
  dino_1.addAnimation("move", dino1Img)
  dino_1.debug = true
  dino_1.setCollider("rectangle", 0,0, 10, 10)

  dino_2 = createSprite((displayWidth)+500,700, 50, 50);
  dinoHead_2 = createSprite(dino_2.x, dino_2.y-20, 40, 70);
  //dinoHead_2.visible = false;
  dino_2.scale = 6
  dino_2.mirrorX(-1)
  dino_2.addAnimation("move", dino2Img)
  dino_2.debug = true
  dino_2.setCollider("rectangle", 0,0, 10, 10)
  
  dino_3 = createSprite((displayWidth)+900,700, 50, 50);
  dinoHead_3 = createSprite(dino_3.x, dino_3.y-20, 40, 70);
  //dinoHead_3.visible = false;
  dino_3.scale = 6
  dino_3.mirrorX(-1)
  dino_3.addAnimation("move", dino3Img)
  dino_3.debug = true
  dino_3.setCollider("rectangle", 0,0, 10, 10)
  
  dino_4 = createSprite((displayWidth)+1300,700, 50, 50);
  dinoHead_4 = createSprite(dino_4.x, dino_4.y-20, 40, 70);
  //dinoHead_4.visible = false;
  dino_4.scale = 6
  dino_4.mirrorX(-1)
  dino_4.addAnimation("move", dino4Img)
  dino_4.debug = true
  dino_4.setCollider("rectangle", 0,0, 10, 10)
  
  dino_5 = createSprite((displayWidth)+1700,700, 50, 50);
  dinoHead_5 = createSprite(dino_5.x, dino_5.y-20, 40, 70);
  // dinoHead_5.visible = false;
  dino_5.scale = 6
  dino_5.mirrorX(-1)
  dino_5.addAnimation("move", dino1Img)
  dino_5.debug = true
  dino_5.setCollider("rectangle", 0,0, 10, 10)


  //Moving Right
  dino_6 = createSprite((displayWidth-displayWidth)-100,700, 50, 50);
  dinoHead_6 = createSprite(dino_6.x, dino_6.y-20, 40, 70);
  //dinoHead_6.visible = false;
  dino_6.scale = 6
  dino_6.mirrorX(1)
  dino_6.addAnimation("move", dino2Img)
  dino_6.debug = true
  dino_6.setCollider("rectangle", 0,0, 10, 10)
  
  dino_7 = createSprite((displayWidth-displayWidth)-500,700, 50, 50);
  dinoHead_7 = createSprite(dino_7.x, dino_7.y-20, 40, 70);
  //dinoHead_7.visible = false;
  dino_7.scale = 6
  dino_7.mirrorX(1)
  dino_7.addAnimation("move", dino3Img)
  dino_7.debug = true
  dino_7.setCollider("rectangle", 0,0, 10, 10)
  
  dino_8 = createSprite((displayWidth-displayWidth)-900,700, 50, 50);
  dinoHead_8 = createSprite(dino_8.x, dino_8.y-20, 40, 70);
  //dinoHead_8.visible = false;
  dino_8.scale = 6
  dino_8.mirrorX(1)
  dino_8.addAnimation("move", dino4Img)
  dino_8.debug = true
  dino_8.setCollider("rectangle", 0,0, 10, 10)
  
  dino_9 = createSprite((displayWidth-displayWidth)-1300,700, 50, 50);
  dinoHead_9 = createSprite(dino_9.x, dino_9.y-20, 40, 70);
  //dinoHead_9.visible = false;
  dino_9.scale = 6
  dino_9.mirrorX(1)
  dino_9.addAnimation("move", dino1Img)
  dino_9.debug = true
  dino_9.setCollider("rectangle", 0,0, 10, 10)
  
  dino_10 = createSprite((displayWidth-displayWidth)-1700,700, 50, 50);
  dinoHead_10 = createSprite(dino_10.x, dino_10.y-20, 40, 70);
  //dinoHead_10.visible = false;
  dino_10.scale = 6
  dino_10.mirrorX(1)
  dino_10.addAnimation("move", dino2Img)
  dino_10.debug = true
  dino_10.setCollider("rectangle", 0,0, 10, 10)
  

}