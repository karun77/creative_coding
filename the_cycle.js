//made long back on khan academy

//khan academy is a pretty great website

//this might work in p5.js. its working on the code editor in khan academy

//  The Cycle works perfectly ! thanks to Michael.Hahn and Gaming Ninja and phil

var ADD_ROTATION = 0;
var rects = [];
for (var i = 0; i < 25; i++) { 
    rects.push({X: i*20, Y: height*0.85 + random(-40,40)});
}

var pedal = 0,extra = 0;
var drawStaticStuff = function() {

   background(100,3,4,102);
    
    fill(255, 0, 0);
    textSize(30);
    text("' It's a sunny day '",100,200);
    
    //the sun (not really static)
    pushMatrix();
    stroke(255,255,0);
    fill(255, 255, 0);
    translate(100,100);
    for(var i = 0; i <= 12; i++){
    
    //you can add different things to the line() to make different effects
    //i think so
    
    //line(0,0,50+(extra%30),0);
    line(0,0,50,+ random(5,10));
    
    rotate(30);
    extra++;
    }
    popMatrix();
    ellipse(100,100,50,50);
};
    
var drawCycle = function() {

    //the bike//
    //wheels
    fill(204, 134, 136,102);
    stroke(0);
    ellipse(180,280,40,40);
    ellipse(250,280,40,40);

    //the spokes in the wheels
    for(var posX = 180;posX <= 250; posX+=70){
        for(var ang = 0;ang <= 330;ang += 30){
            pushMatrix();
                translate(posX,280);
                rotate(ang + ADD_ROTATION);
                line(0,0,10,13);
            popMatrix();
            ADD_ROTATION+=0.1;
        }
    }
    
    //backframe
 
    strokeWeight(2);
    stroke(255, 255, 255);
    line(180,280,210,283);
    fill(0);
    ellipse(210,283,20,20);

    //the pedal
    pushMatrix();
    translate(210,283);
        rotate(pedal);
        line(0,0,15,0);
        pushMatrix();
            translate(12,0);
            rotate(-pedal);
            rectMode(CENTER);
            rect(0,0,10,5);
            rectMode(CORNER);
        pedal = (pedal+2)%360;
        popMatrix();
    popMatrix();
    
    line(210,283,200,255);
    stroke(0);
    line(200,255,195,240);
    //seat
    line(190,239,210,243);
    stroke(255, 255, 255);
    line(180,280,200,255);
             
    //front frame
    line(210,283,240,250);
    line(250,280,238,240);
    stroke(0);
    line(238,240,240,238);
    line(235,235,245,242);
    stroke(255);
    line(200,255,238,250);
};
    
var drawMovingStuff = function(){
    //The ground//
    
    stroke(25,60,0);
    line(0,300,400,300);
    
    noStroke();
    fill(255, 255, 255);
    rect(0,300,400,100);
    
    for (var i = 0; i < rects.length; i++) {
        fill(0, 34, 255);
        rect(rects[i].X, rects[i].Y, 5, 5);
        rects[i].X -= 1;
        if (rects[i].X <= -20) {
            rects[i].X = width;
        }
    }
};

var drawScene1 = function() {
      
};

var drawScene2 = function() {
    drawStaticStuff();
    drawCycle();
    drawMovingStuff();
};

draw = function() {
    drawScene2();
};
drawScene2();