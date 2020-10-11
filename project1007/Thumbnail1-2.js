class Thumbnail{
    constructor(container,width,height,bd,src,x){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd;
        this.x=x;
        var me = this;

        this.img=document.createElement("img");
        this.src=src;
        this.img.src=this.src;

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid white";
        this.div.style.boxSizing="border-box";

        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";
        this.img.style.boxSizing="border-box";

        this.img.addEventListener("click",function(){
            var index = thumbArray.indexOf(me);
            getDetail(index);
            pointer.targetX=me.x;
        });

        this.div.appendChild(this.img);
        this.container.appendChild(this.div);
    }    
}