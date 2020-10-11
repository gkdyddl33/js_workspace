/* 총알을 정의한다. */
class Bullet extends GameObject{
    constructor(){
        super(container,src,width,height,x,y,velX,velY);
    }
    tick(){
        // 기존 x위치에 속도만큼을 더해 나간다.
        this.x = this.x+this.velX;       
    }
    render(){
        this.img.style.left=this.x+"px";        
    }
}