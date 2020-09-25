/* 게임의 주인공 비행기를 정의한다. */
class Hero{
    // 비행기가 가지는 변수로 
    // 어떠한 초기화 작업을 진행할지를 결정짓는 method() = 생성자 메소드 라 부른다

    constructor(container,x,y,width,height){
        this.img = document.createElement("img");
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";

        // 부모요소에 부착 => 매개변수에 받아서 호출하자.
        container.appendChild(this.img);
    }
    // 비행기의 동작 방식을 결정짓는 메서드
    move(){

    }
}