class Ground{
    constructor(width){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2, 650, width, 90 ,options);
        this.width = width;
        this.height = 90;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
    }


}