class Ball{
    constructor(x,y,radius){
var options={
    restitution:0.3,
	friction:0.5,
	density:1.2

}
this.x=x;
this.y=y;
this.radius=radius;
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);
    }
    display(){
    var paperPos=this.body.position;
    push()
    translate(paperPos.x,paperPos.y);
    rectMode(RADIUS);
    strokeWeight(3);
    fill("pink");
    ellipse(300,350,this.r,this.r);
    pop()
    }
}



