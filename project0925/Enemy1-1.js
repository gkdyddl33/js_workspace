/* 적군을 정의한다 */
class Enemy{
    constructor(container,width,height,x,y,src){
        this.img = document.createElement("img");
        this.img.src=src;
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";

        container.appendChild(this.img);
    }
    move(){
        
    }
}