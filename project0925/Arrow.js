/* 
    아래의 코드 단위는 사물 자체가 아니라,
    장차 사물을 대량으로 생산할 수 있는 '틀' 이다.
    전산분야에서는 이 틀을 가리켜 '클래스' 라고 한다.

            예) 붕어빵 - 붕어빵 형판(클래스)

    객체지향 프로그래밍 언어
    객체지향이란?
    객체중심적 사고방식으로 접근해야 한다.                
*/

class Arrow{
    // 클래스 안에 선언된 변수는,
    // 이 클래스 소속이 되므로 변수명 앞에 자기 자신꺼라는 "대명사"를
    // 붙여야 하며, this라는 이미 정해진 변수를 쓴다.
    // this = 소유권을 '주체'의 소유

    // ES 2015년에 발표된 JS에 의해서, 클래스가 소유한 변수는
    // constructor() 라는 함수에 넣어둬야 한다.
    constructor(){
        this.arrow;
        this.stepX=10;
    }

    // 클래스 안에 선언된,
    // 즉, 클래스가 보유한 함수는 해당 사물의 동작방법을 결정짓는다 하여
    // method() 라 한다 =  방법
    createArrow(){
        // this.createArrow=function
        this.arrow = document.createElement("span");
        this.arrow.innerText="→";
        this.arrow.style.position="absolute";
        this.arrow.style.left=50+"px";
        this.arrow.style.top=100+"px";
        this.arrow.style.color="red";
        this.arrow.style.fontSize="30px";

        document.body.appendChild(this.arrow);        
    }

    move(){
        this.arrow.style.left=parseInt(this.arrow.style.left)+this.stepX+"px";
    }
}