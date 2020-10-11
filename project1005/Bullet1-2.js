class Bullet{
    constructor(src,x,y,width,height,velX,velY){
        this.img=document.createElement("img");
        this.src=src;
        this.img.src=this.src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        wrapper.appendChild(this.img);
    }
    tick(){
        this.y +=this.velY;
        for(var i=0;i<enemyArray.lenght;i++){
            var result = colisionCheck(this.img,enemyArray[i].img);
            if(result){
                // 화면에서 먼저 죽이고 더 죽여야 한다 -> splice + removeChild
                var img=enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(0,1);
        
                wrapper.removeChild(this.img);
                var index = bulletArray.indexOf(this);
                bullerArray.splice(index,1);
            }
        }
    }
    render(){
        this.img.style.top=this.y+"px";
    }
}