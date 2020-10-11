/*  
    게임에 등장할 모든 객체들이 가질 수 있는 보편적 특징들을
    보유할 최상위 객체 정의
*/
class GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        this.container=container;

        this.img=document.createElement("img");
        this.src=src;        

        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

        // 스타일 적용
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        // 화면에 부착
        this.container.appendChild(this.img);
    }
    //이 클래스를 상속받는 자식이 누구인지 모르므로..
    // 주인공일지 아이템 적군 벽돌.. tick(),render() 그 내용을 채워넣을 수 없는경우,
    // 메서드명만 정의할 수 있느넫, 이러한 메서드를 가리켜 불완전한다고 하여
    // "추상메서드"라고 한다.
    // 즉 현재시점에서는 예측이 불가..
    // (자바스크립트는 완벽한 컴파일 언어가 아니기에, 사실 추상메서드를 지원하지 않는다.)
    // 현재는 내용만 비워놓겟다.
    tick(){
        
    };
    render(){
        
    };
}