/* 상속이란?
    BlackPerson 클래스는 Person클래스의 코드까지 사용할 수 있도록 확장하겠다.
 */
class BlackPerson extends Person{
    constructor(){
        /* 정리

        */


        // ex. this.name = "nigro" -> 넣으면 에러발생
        // 에러발생이유?
        // 부모보다 시급한 초기화는 없기 때문에 부모의 탄생이 최우선시 된다.

        // 자식 호출보다 부모 호출이 우선 = constructor()
        // 부모 생성자 호출 이유? 생물학적으로 당연하다.
        super(5,8);         // 자식에서 매개변수를 넣으면 그것을 짝을 맞춰서
                                  // 부모에서도 호출을 동일하게 해줘야 한다.
        // 그래서 부모 생성자 밑에 두어야 함. == 위에 발생이유에 해결책
        this.name="nigro";
        // 상태는 변수로 표현한다(즉,속성)
        this.color="black";
        console.log("I am sub class(Person)");
        
    }
} 