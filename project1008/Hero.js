/*extends gameobject를 명시하는 순간부터
    현재의 .Hero의 인스턴스는 마치 내것처럼, gameobject의 모든 변수, 함수를 
    사용할 수 있다. 그래서 상속이라고 한다.
*/
class Hero extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    }
   // 아래의 메서드는 주인공만의 행동방법이므로,
   // 이 클래스 안에서 정의하면 됨..

    tick(){
        // 기존 x위치에 속도만큼을 더해 나간다.
        this.x = this.x+this.velX;
        // 기존 y위치에 속도만큼을 더해 나간다.
        this.y = this.y+this.velY;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}