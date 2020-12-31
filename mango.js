class Mango{
    constructor(x,y) {
        
        var options = {
            restitutuion:0.5, 
            isStatic:true,
            friction: 0,
            desity: 0.8
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,50,options);
        World.add(world,this.body);
        this.spritE = createSprite(this.x,this.y,100,100);
        this.spritE.visible = false;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(255,235,0);
        ellipse(0,0,50,50);
        pop();
        //this.spritE.x = this.body.position.x;
        //this.spritE.y = this.body.position.y;
        if(this.spritE.isTouching(rock)){
            Matter.body.setStatic(this.body,false);
        }
    }
}