class Bullet{
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velY = velY;
        this.velX = velX;

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        wrapper.appendChild(this.img);

    }
    tick(){
        this.y += this.velY;
    }
    render(){
        this.img.style.top = this.y+"px";
    }
}