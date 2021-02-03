const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, platform, platform1, box2,box3,box4,box5;
var backgroundImg;
var newlog,ss;
var box6, box7,box8,box9;
var box10, box11, box12, box13, box14, box15;
var block1, block2, block3, block4, block5, block6;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(560,220,40,40);
    box2 = new Box(600,220,40,40);
    box3 = new Box(640,220,40,40);
    box4 = new Box(680,220,40,40);
    box5 = new Box(720,220,40,40);

    box6 = new Boxx(580,180,40,40);
    box7 = new Boxx(620,180,40,40);
    box8 = new Boxx(660,180,40,40);
    box9 = new Boxx(700,180,40,40);

    box10 = new Boxxx(600,140,40,40);
    box11 = new Boxxx(640,140,40,40);
    box12 = new Boxxx(680,140,40,40);

    box13 = new Boxxxx(620,100,40,40);
    box14 = new Boxxxx(660,100,40,40);
    box15 = new Boxxxxx(640,60,40,40);
    
    platform= new Ground(640,240,250,20);
    platform1= new Ground(980,290,200,20);

    block1= new Box(940,270,40,40);
    block2= new Box(980,270,40,40);
    block3= new Box(1020,270,40,40);

    block4= new Boxxx(960,230,40,40);
    block5= new Boxxx(1000,230,40,40);
    block6= new Boxxxxx(980,190,40,40);
    

    bird = new Bird(100,50);

    
    ss= new Slingshot(bird.body,{x:200,y:100})

}

function draw(){
    background("black");
    Engine.update(engine);

    fill("white");
    textSize(24);
    textFont("showcard gothic");
    text("Drag the coloured object to make the cupcakes fall!",50,330);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    
    ground.display();
    platform.display();
    platform1.display();
    
    block1.display();
    block2.display();
    block3.display();

    block4.display();
    block5.display();
    block6.display();
   
    

    
    

    bird.display();
    

    
    ss.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    ss.fly();
}
