class Log extends BaseClass{
    constructor(x, y, height, angle) {
    super(x,y,20,height ,angle);
    this.image = loadImage("sprites/wood2.png");
    
    //using set angle for matter.js
    Matter.Body.setAngle(this.body,angle);
    }
  };
  