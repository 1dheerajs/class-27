class Rope{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
    this.rope=Constraint.create(options);
    World.add(world,this.rope)  
    
}
display(){
var p1=this.rope.bodyA.position;
var p2=this.rope.bodyB.position;
    line(p1.x,p1.y,p2.x,p2.y)
}
}