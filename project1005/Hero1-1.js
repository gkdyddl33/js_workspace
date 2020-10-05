class Hero{
    constructor(x,y,width,height,velX,velY){
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        this.img.src="../images/shooting/hero.png";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        wrapper.appendChild(this.img);
    }
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}