class hammer {
    constructor(x,y){
        var options={
            restitution:1,
            density:2,
            friction:0.5
        }
 this.body=Bodies.rectangle(x,y,100,50,options)
 this.width=100
 this.height=50
 World.add(world,this.body)
    }
 display(){
     var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0,this.width,this.height);
      pop();
 }
}