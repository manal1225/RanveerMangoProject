class mango{
    constructor(x, y,r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic':true,
            'density':1.2
        }
        this.r = r
        this.body = Bodies.circle(x, y,r, options);
       
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,30,30);
        pop();
      }
}