/* 게임의 주인공 비행기를 정의한다. */
class Hero{
    // 비행기가 가지는 변수로
    // 주인공이 태어날 때, 어떠한 초기화 작업을 진행할지를 결정짓는 method()
    // 특히, "생성자 메서드" 라 부른다.
    constructor(container,x,y,width,height){
        // constructor 안에 선언된 변수는 현재 인스턴스 꺼다.
        // this가 붙어있는 변수는 해당 인스턴스와 생명력을 같이한다.
        // 즉, 해당 인스턴스마다 각각 고유하게 보유할 수 있는 변수
        // 언제 소멸되나? 인스턴스가 살아있는 한..        
        this.babo="바봉";
        this.x=x;
        this.y=y;
                                     // 아래의 생성자 함수를 호출하는 자는 반드시 주인공 이미지가 붙게 될
                                     // 부모 요소를 전달해야 한다..container 변수값을 결정지어야 한다.

        this.img = document.createElement("img");       // 생성자내에서는 반드시 변수명 앞에 this 를 명시.
                                                                              // 왜? 객체안에서 코드 작성하는 것이므로
        this.img.src="../images/shooting/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";

        // 부모요소에 부착하자.
        container.appendChild(this.img);
    }

    // 비행기의 동작 방식을 결정짓는 메서드
    move(){

    }
} 