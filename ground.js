class ground {
    constructor(x,y){
        var options={
           isStatic:true
        }
 this.body=Bodies.rectangle(x,y,800,20,options)
 this.width=800
 this.height=20
 World.add(world,this.body)
    }
 display(){
     var pos = this.body.position;
      var angle = this.body.angle;
      strokeWeight(3);
      stroke('white')
      fill('grey')
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height);
 }
}