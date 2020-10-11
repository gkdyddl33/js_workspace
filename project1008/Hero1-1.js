class Hero extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    }
    tick(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}