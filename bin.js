class bin{
    constructor(x,y,w,h){
        var options={
isStatic:true
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world, this.body);
    }
    display(){
        var posx=this.body.position.x
        var posy=this.body.position.y
        rectMode(CENTER);
        rect(posx,posy,this.width,this.height);
    }
}