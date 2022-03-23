// blueprint
class Rotater{
    constructor(x,y,width,height,color,angle){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.color=color
        this.angle=angle
        var options={
            isStatic:true
    }
    this.body=Bodies.rectangle(this.x,this.y,this.outerWidth,this.height,options)
    World.add(world,this.body)
}

    show(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        fill(this.color)
        rotate(this.angle)
        rect(0,0,this.width,this.height)
        this.angle+=0.1
        pop()
    }
}