//following the inheritance concept using the keyword extends
class Bird extends BaseClass{
  constructor(x,y){

    //using super keyword inheriting the properties from parent class
    //super-constructor of parent class
    super(x,y,50,50);
    //loading the image
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}