var song1, song2, song3, analyzer;
var isOverCircle;
var isOverCircle2;
var isOverCircle3;

function preload() {
    song1 = loadSound('ToursEnthusiast.mp3');
    song2 = loadSound('BrokeForFreeNightOwl.mp3');
    song3 = loadSound('JahzzarSiesta.mp3');
}

function setup() {
    createCanvas(700, 700);
    
/*
    song1.stop();
    song2.stop();
    song3.stop();
*/
    analyzer = new p5.Amplitude();

    analyzer.setInput(song1);
    analyzer.setInput(song2);
    analyzer.setInput(song3);
}

function draw() {
    background(130);
    
    var tracks
    var one
    var two
    var three
    textSize(20);
    fill("white")
    tracks = text("SONGS", width/8, height/8)
    one = text("1", width/6, 120)
    two = text("2", width/6, 160)
    three = text("3", width/6, 200)
   
    var rms = analyzer.getLevel();
    var r = random(255)
    var g = random(255)
    var b = random(255)
    
    stroke("purple");
    strokeWeight(1);
    fill(255,0,255);
    
    ellipse(width/2, 175, 10+rms*200, 10+rms*200);
    
    fill(0,255,128);
    
    ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
    
    fill(0,255,255);
    
    ellipse(width/2, 525, 10+rms*200, 10+rms*200);
    
    //FIRST BUTTON
    
    var distance = dist(mouseX, mouseY, 145, 113);
    
    if(distance < 5)
    {
        isOverCircle = true;
    } else {
        isOverCircle = false;
    }
    
    stroke(0);
    strokeWeight(1.5);
    if(isOverCircle == true)
    {
        fill("black");
    } else {
        fill("white");  
    }
    ellipse(145, 113, 15, 15);
    
    //SECOND BUTTON
    
    var distance = dist(mouseX, mouseY, 145, 153);
    
    if(distance < 5)
    {
        isOverCircle2 = true;
    } else {
        isOverCircle2 = false;
    }
    
    stroke(0);
    strokeWeight(1.5);
    if(isOverCircle2 == true)
    {
        fill("black");
    } else {
        fill("white"); 
    }
    ellipse(145, 153, 15, 15);
    
    // THIRD BUTTON
    
    var distance = dist(mouseX, mouseY, 145, 193);
    
    if(distance < 5)
    {
        isOverCircle3 = true;
    } else {
        isOverCircle3 = false;
    }
    
    stroke(0);
    strokeWeight(1.5);
    if(isOverCircle3 == true)
    {
        fill("black");
    } else {
        fill("white"); 
    }
    ellipse(145, 193, 15, 15);
}

function mousePressed() {
    if(isOverCircle == true)
    {
    song1.play();
    } else {
    song1.pause();  
    }

    if(isOverCircle2 == true)
    {
    song2.play();
    } else {
    song2.pause();  
    }
    
    if(isOverCircle3 == true)
    {
    song3.play();
    } else {
    song3.pause();  
    } 
}