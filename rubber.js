class rubber {
    constructor(x,y){
        var options={
            restitution:0.3,
            density:1,
            friction:5
        }
 this.body=Bodies.circle(x,y,20,options)

 World.add(world,this.body)
    }
 display(){
     var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('grey')
      ellipseMode(RADIUS)
      ellipse(0,0,20,20);
      pop();
 }
}