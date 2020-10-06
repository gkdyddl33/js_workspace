/* 총알을 정의한다. */ 
class Bullet{

    // 총알이 "태어날 때" 부여할 '속성' 들을 생성자에서 처리한다.
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src = src;         // 총알의 경로를 매개변수로 받는다.
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img = document.createElement("img");
        // 폭탄, 총알 등등의 웨폰이 여러가지가 있으므로 변수로..
        this.img.src=this.src;
        this.img.style.position = "absolute";
        this.img.style.left=this.x+"px";                // 우주선의 너비의 절반을 우측..총알 위치 변경
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        wrapper.appendChild(this.img);
    }

    tick(){
        // 총알의 물리량 변화
        this.y += this.velY;

        // (*)총알이 한걸음,한걸음 진행할 때마다 배열에 존재하는 모든~적군을 대상으로
        // 충돌했는지 여부를 판단할꺼임
        // collisionCheck(나,적군);
        // 적군 만큼 반복문을 돌아야 모든~적군들이 들어간다. 히어로는 1명 적군은 여러명
        for(var i=0;i<enemyArray.length;i++){
            var result = collisionCheck(this.img,enemyArray[i].img);
            if(result){
                // alert("맞췄어!");
                // 맞췄으면 ?  적군배열에서 요소 삭제 splice(index,지울갯수), 
                //                화면에서도 삭제 removeChild(-->너죽)
                //                총알배열에서 요소 삭제 splice(index,지울갯수),
                //                화면에서도 삭제 removeChild(-->나죽)
                // 죽일떄? 동기화도 같이 해줘야 한다. 
                // 즉, 화면에서 먼저 죽이고 더 죽여야 한다 -> splice + removeChild
                // (1) 화면에 출력을 먼저 죽이고 적군을 죽이기
                var img = enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(0,1);
                
                // (2)  나죽자 (총알배열에서 요소삭제 splice,화면에서도 삭제 removeChild)
                // img=bulletArray[i].img;  --> 총알은 한개니깐 배열로 하지말고 this로
                wrapper.removeChild(this.img);                 // 그래서 즉, 화면에서는 제거햇지만
                var index = bulletArray.indexOf(this);        // 총알 객체
                                                                              // 현재 총알의 인스턴스가 배열의 몇번째에 존재하는지?
                bulletArray.splice(index,1);                // 현재총알의 index = 
            }
        }
    }

    render(){
        // 변화된 물리량을 화면에 표시 = 그래픽 처리
        this.img.style.top = this.y+"px";
    }
}