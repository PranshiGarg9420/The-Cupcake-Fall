class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
    this.image = loadImage("sprites/cupcake1.png.png");
  }

  display(){
    fill(85,136,238);
    super.display();
  }

};
