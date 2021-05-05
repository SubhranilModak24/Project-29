class Slingshot {
    constructor(bodyA , pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.09,
            length : 11
        }
        this.pointB = pointB;
        this.lconstraint = Constraint.create(options);
        World.add(world,this.lconstraint);
    }
    attach(body){
        this.lconstraint.bodyA = body;
    }

    fly(){
        this.lconstraint.bodyA = null;
    }
    display(){
        if(this.lconstraint.bodyA){
            pointA = this.lconstraint.bodyA.position;
            pointB = this.pointB
            push();

            stroke(42,22,8)
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }

            pop();
        }
    }
}