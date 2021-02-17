class stone {
    constructor(x,y){
        var options={
            restitution:1,
            density:2,
            friction:1.0
        }
 this.body=Bodies.rectangle(x,y,100,100,options)
 this.width=100
 this.height=100
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
      rectMode(CENTER)
      rect(0, 0,this.width,this.height);
      pop();
 }
}