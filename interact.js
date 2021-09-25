function movement(){

    //changing the animation to "dead"
    if(placeHolder2 == 1 && player.isTouching(ground1)){
        player.changeAnimation("dead")

    //switching stages to stage 2
    }else if(keyIsDown(UP_ARROW) && gameState == "play" && stage == 1){
        stage = 2
        stageNeed = 2

    //switching stages to stage 2
    }else if(keyIsDown(DOWN_ARROW) && gameState == "play" && stage == 2){
        stage = 3
        stageNeed = 3
    
    //allows the player to jump
    }else if(keyIsDown(75) && gameState == "play" && stage == 3){
        stage = 4
        stageNeed = 4
    
    //allows the player to jump
    }else if(keyIsDown(32) && gameState == "play"  && jumpCounter <  maxJump && player.velocityY > -18.6 && ability2 == 0){
        player.velocityY = -20
        jumpCounter = jumpCounter + 1; 
        jumpStop = 1;

    //allows the player to walk left
    }else if(keyIsDown(65) && gameState == "play"){
        
        player.x = player.x-16
        player.mirrorX(-1)
        player.changeAnimation("Run")
        player.setCollider("rectangle", 100,0, 200, 450)
        jumpStop = 0;

    //allows the player to walk right
    } else if(keyIsDown(68) && gameState == "play"){
        
        player.x = player.x+16
        player.mirrorX(1)
        player.setCollider("rectangle", -180,0, 200, 450)
        player.changeAnimation("Run")
        jumpStop = 0;

    //changes the playes animation to "idle"
    } else{
        player.changeAnimation("Idle")
        jumpStop = 0;
    }

    //changes the players animation to "jump"
      if(gameState == "play"  && !jumpCounter == 0){
        player.changeAnimation("Jump")
    }

    //changes the gameState to "play"
    if(keyDown(ENTER)){
        gameState = "play"
        story.destroy()
        
        dino1.velocityX = -7
        dinoHead1.velocityX = -7
    
        dino2.velocityX = -7
        dinoHead2.velocityX = -7
    
        dino3.velocityX = -7
        dinoHead3.velocityX = -7
    
        dino4.velocityX = -7
        dinoHead4.velocityX = -7

      }  

    //adds gravity to the player
        player.velocityY += 1.3

    //allows the jump function to work
    if(player.isTouching(ground1) && jumpStop == 0){
        jumpCounter = 0
        wallBounceCounter = 0
    }

    //switches stage "1" to stage "2"
    if(player.isTouching(stageEnd1) && placeHolder2 == 0){
        stage = 2
        stageNeed = 2
    }

    //stage "2" start
    if(stage == 2 && stageNeed == 2){
        player.x = 300
        player.y = 400
        stageEnd1.destroy()
        dino1.destroy()
        dinoHead1.destroy()
        dino2.destroy()
        dinoHead2.destroy()
        dino3.destroy()
        dinoHead3.destroy()
        dino4.destroy()
        dinoHead4.destroy()

        abilityItem1 = createSprite(displayWidth/2,650,30,30)
        abilityItem1.addAnimation("Rotating", abilityItem1Img);
        abilityItem1.changeAnimation("Rotating")   
        
        platform1 = createSprite(1468,500,50,20)
        platform1inv = createSprite(1468,480.25,70,20)
        platform1.addImage(platformImg)
        platform1.scale = 1

        platform2 = createSprite(800,400,50,20)
        platform2inv = createSprite(800,380.25,70,20)
        platform2.addImage(platformImg)
        platform2.scale = 1

        platform3 = createSprite(70,300,50,20)
        platform3inv = createSprite(70,250.25,120,20)
        platform3.addImage(platformImg)
        platform3.scale = 2

        stageEnd2 = createSprite((displayWidth-displayWidth),displayHeight-900)

        if(stage == 2 && stageNeed == 2 && player.x == 300 && player.y == 400 ){
            stageNeed = 1
        } 
    }
    
    //stage "2" function
    if(stage == 2){

        //creates "double jump"
        if(player.isTouching(abilityItem1)){
            ability1 = 1
            abilityItem1.destroy()
        }

        //allows the player to have "double jump"
        if (ability1 == 1) {
            maxJump = 2.1
        }
        
        //allows the player to jump off of platforms
        if(player.isTouching(platform1inv) || player.isTouching(platform2inv) || player.isTouching(platform3inv)){
            jumpCounter = 0
        } 

        //switches stage "2" to stage "3"
        if(player.isTouching(stageEnd2)){
            stage = 3
            stageNeed = 3
        }
    }
    
    //stage "3" start
    if(stage == 3 && stageNeed == 3){
        player.x = (displayWidth)/2
        player.y = (displayHeight)/2
        stageEnd2.destroy()
        
        abilityItem1.destroy()

        platform1.destroy()
        platform2.destroy()
        platform3.destroy()

        platform1inv.destroy()
        platform2inv.destroy()
        platform3inv.destroy()

        stagePlatform1 = createSprite(400,500,50,20)
        stagePlatform1inv = createSprite(400,480.25,200,20)
        stagePlatform1.addImage(stagePlatformImg)
        stagePlatform1.scale = 0.6

        stagePlatform2 = createSprite(1200,500,50,20)
        stagePlatform2inv = createSprite(1200,480.25,200,20)
        stagePlatform2.addImage(stagePlatformImg)
        stagePlatform2.scale = 0.6

        dinoBounceRight = createSprite(displayWidth+500,displayHeight/2,60,displayHeight)
        dinoBounceLeft = createSprite((displayWidth-displayWidth)-500,displayHeight/2,60,displayHeight)

        dinoHeadBounceRight  = createSprite(displayWidth+500,displayHeight/2,80,displayHeight)
        dinoHeadBounceLeft = createSprite((displayWidth-displayWidth)-500,displayHeight/2,80,displayHeight)

        dinoBounceRightStart = createSprite(displayWidth-500,displayHeight/2,60,displayHeight)
        dinoBounceLeftStart = createSprite((displayWidth-displayWidth)+500,displayHeight/2,60,displayHeight)

        dinoMirrorRight = createSprite(displayWidth+500,displayHeight/2,100,displayHeight)
        dinoMirrorLeft = createSprite((displayWidth-displayWidth)-500,displayHeight/2,100,displayHeight)

        abilityItem2 = createSprite(displayWidth/2,650,30,30)
        abilityItem2.addAnimation("Rotating", abilityItem2Img);
        abilityItem2.changeAnimation("Rotating")
        maxJump = 1


        if(stage == 3 && stageNeed == 3 && player.x == (displayWidth)/2 && player.y == (displayHeight)/2 ){
            stageNeed = 1
        } 
        
        //stage 3 dinos
        
        //Moving Left
        dino_1.velocityX = -7
        dinoHead_1.velocityX = -7

        dino_2.velocityX = -7
        dinoHead_2.velocityX = -7
    
        dino_3.velocityX = -7
        dinoHead_3.velocityX = -7
    
        dino_4.velocityX = -7
        dinoHead_4.velocityX = -7

        dino_5.velocityX = -7
        dinoHead_5.velocityX = -7


        //Moving Right
        dino_6.velocityX = 7
        dinoHead_6.velocityX = 7
    
        dino_7.velocityX = 7
        dinoHead_7.velocityX = 7
    
        dino_8.velocityX = 7
        dinoHead_8.velocityX = 7

        dino_9.velocityX = 7
        dinoHead_9.velocityX = 7
    
        dino_10.velocityX = 7
        dinoHead_10.velocityX = 7
    }

    //stage "3" function
    if(stage == 3){

        //creates "bigger jump"
        if(player.isTouching(abilityItem2)){
            ability2 = 1;
            abilityItem2.destroy()
            player.scale = 0.6
        }
        
        //allows the player to have "bigger jump"
        if(keyIsDown(32) && jumpCounter <  maxJump && ability2 == 1){
            player.velocityY = -30
            jumpCounter = jumpCounter + 1; 
            jumpStop = 1;
        }
    
        if(player.isTouching(stagePlatform1inv) || player.isTouching(stagePlatform2inv)){
            jumpCounter = 0
        }

        if(dino_1Bounce == 1 && dino_5Bounce == 1){
            DinoMirror()
        }

        if(dinoCounter == 10){
            stage = 4
            stageNeed = 4
        }

        dinoMirrorSet()
        dinoBounce()
        dinoAttack2()
        playerAttack2()

    }

    if(stage == 4 && stageNeed == 4){
        if(keyIsDown(32) && gameState == "play"  && jumpCounter <  maxJump && player.velocityY > -18.6){
            player.velocityY = -20
            jumpCounter = jumpCounter + 1; 
            jumpStop = 1;
            
        }

        player.x = (displayWidth)/5
        player.y = (displayHeight)/2

        stagePlatform1.destroy()
        stagePlatform1inv.destroy()
        stagePlatform2.destroy()
        stagePlatform2inv.destroy()
        dinoBounceRight.destroy()
        dinoBounceLeft.destroy()
        dinoHeadBounceRight.destroy()
        dinoHeadBounceLeft.destroy()
        dinoBounceRightStart.destroy()
        dinoBounceLeftStart.destroy()
        dinoMirrorRight.destroy()
        dinoMirrorLeft.destroy()

        ability2 = 0;

        wallBounceLeft = createSprite((displayWidth-displayWidth)-250,displayHeight/2,501,displayHeight)
        wallBounceRight = createSprite(displayWidth+250,displayHeight/2,501,displayHeight)
        bossBounceLeft = createSprite(displayWidth-10,650,10,1000)

        boss = createSprite(displayWidth/2,650)
        boss.addAnimation("Run", boss_run)
        boss.addAnimation("Dead", boss_dead)
        boss.changeAnimation("Run", boss_run)
        boss.debug = true
        boss.scale = 0.5
        boss.setCollider("rectangle", -100,0,400,400)
        boss.velocityX = 15
        boss.lifetime = 1000

        lifeTimeTestCollide = createSprite(displayWidth/2,displayHeight/2,1000,50)
        lifeTimeTestTop = createSprite(displayWidth/2,(displayHeight/2)-200,25,25)
        lifeTimeTestBottom = createSprite(displayWidth/2,(displayHeight/2)+1000,1000,1800)

        lifeTimeTestCollide.visible = false;
        lifeTimeTestTop.visible = false;
        lifeTimeTestBottom.visible = false;
        
        lifeTimeTestCollide.lifetime = 950
        lifeTimeTestBottom.lifetime = 1000
        lifeTimeTestTop.lifetime = 1000
        
        if(stage == 4 && stageNeed == 4 && player.x == (displayWidth)/5 && player.y == (displayHeight)/2 ){
            stageNeed = 1
        } 
    
    }

    if(stage == 4){

        if((player.isTouching(wallBounceLeft) || player.isTouching(wallBounceRight)) && wallBounceCounter == 0){
            jumpCounter = 0
            wallBounceCounter = wallBounceCounter + 1;
        } 

        if(player.isTouching(boss)){
            player.lifetime = 25
            boss.velocityX = 0
            placeHolder2 = 1
        }

        lifeTimeTestTop.collide(lifeTimeTestCollide)
        lifeTimeTestTop.velocityY = 10;
        if(lifeTimeTestBottom.isTouching(lifeTimeTestTop)){
            console.log("hello")
        }

        if(boss.velocityX == 15){
            boss.mirrorX(1)
            boss.setCollider("rectangle", -100,0,400,400)
        } else if (boss.velocityX == -15){
            boss.mirrorX(-1)

            if(boss.isTouching(bossBounceLeft)){
            boss.setCollider("rectangle", 100,0,400,400)
            }
        }

      
 

    }

  




















































}


