class Box{
    constructor(bg,x,y){
        this.div=document.createElement("div");
        this.bg=bg;
        this.width=100;
        this.height=100;
        this.x=x;
        this.y=y;

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.color="white";

        document.body.appendChild(this.div);
    }  

}