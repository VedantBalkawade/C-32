const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var BackgroundImg;

var bg ;
var Time ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(BackgroundImg)
    background(BackgroundImg)
    // else
    // console.log("not executed")

    // add condition to check if any background image is there to add
    noStroke()
    textSize(35)
    fill("black")

    Engine.update(engine);

    if(hour>=12){
    text("Time : "+hour%12+ "PM",width-300,50 )
    }
    else if(hour===0){
    text("Time : 12AM",100,100 )
    }
    else{
    text("Time : "+hour%12+ "AM",width-300,50 )
    }
    

    

    // write code to display time in correct format here
     

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour<= 06){
        bg="sunrise1.png"
    }
    else if(hour>=06 && hour<=08){
          bg= "sunrise2.png"
    }
    else if(hour>=05 && hour<=08){
        bg= "sunrise3.png"
  }
  else if(hour>=04 && hour<=08){
    bg= "sunrise4.png"
}
else if(hour>=02 && hour<=06){
    bg= "sunrise5.png"
}
else if(hour>=09 && hour<=11){
    bg= "sunrise6.png"
}
else if(hour>=09 && hour<=22){
    bg= "sunset7.png"
}
else if(hour>=10 && hour<=17){
    bg= "sunset8.png"
}
else if(hour>=22 && hour<=11){
    bg= "sunset9.png"
}
else if(hour>=23 && hour<=00){
    bg= "sunset10.png"
}
else if(hour>=20 && hour<=08){
    bg= "sunset11.png"
}
else if(hour>=18 && hour<=08){
    bg= "sunset12.png"
}


    

    //load the image in backgroundImg variable here
    BackgroundImg = loadImage(bg)
}
