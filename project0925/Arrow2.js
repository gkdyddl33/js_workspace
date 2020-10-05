class Arrow{
    constructor(x,y){
        this.arrow;
        this.stepX = 10;
        
        this.arrow = document.createElement("span");
        this.arrow.innerText="→";
        this.arrow.style.position="absolute";
        this.arrow.style.left=x+"px";
        this.arrow.style.top=y+"px";
        this.arrow.style.color="red";
        this.arrow.style.fontSize="35px";

        document.body.appendChild(this.arrow);
    }

    move(){
        this.arrow.style.left= parseInt(this.arrow.style.left)+this.stepX+"px";
    }
}