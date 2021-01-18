class Ground {
    constructor(x,y,width,height){
       var options={
        isStatic:true
       }
this.x=x;
this.y=y;
this.height=height;
this.width=width;
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);  
}
 display()  {
  
  rectMode(CENTER);
  strokeWeight(4);
  fill(255,255,0);
  rect(600,700,this.width,this.height);

 }
    
}