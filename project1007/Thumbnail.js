/* 영화 이미지 썸네일을 정의 - 맨 밑에 div 여러 사각형들 */
class Thumbnail{
    constructor(container,width,height,bd,src,x){
        // 어디에 이미지를 넣을지 컨테이너로 동적으로 놓자
        this.container=container;

        this.div = document.createElement("div");
        this.width = width;
        this.height = height;        
        this.bd = bd;        // border 두께
        this.x=x;
        // (*) this라는 것을 피해가기 위해 -> this.img.addListner()
        var me=this;     

        this.img = document.createElement("img");
        this.src = src;
        
        // 스타일 부여
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid white";     // blue->white        
        this.div.style.boxSizing="border-box";

        this.img.src=this.src;          // 이미지 대입
        this.img.style.width=(this.width-(bd*2))+"px";
        this.img.style.height=(this.height-(bd*2))+"px";
        this.img.style.boxSizing="border-box";        

        // (*) 이미지에 이벤트 구현하기
        // 주의) 이벤트 구현시 사용되는 익명함수내에서 this를 사용하게 되면,
        // 객체의 인스턴스를 가리키게 되는 것이 아니라, 익명함수의 {}영역을 가르키게 된다.
        this.img.addEventListener("click",function(){
            // alert("나의 경로는 "+this.src);
            // getDetail(this.src);    // 지금나의이미지경로를 삽입

            // 위에꺼에서 제목까지 나오게 하기 위해 아래 코드로 수정
            // 현재 객체가 배열의 몇 번째 인지 알아맞추기
            var index = thumbArray.indexOf(me);
            console.log(index);
            // alert("저는 thumbArray의 "+index+"번째에 있으니, marvel 배열의 "+index+"번째를 이용할 겁니다.");
            getDetail(index);       // 이제 이렇게 넣으면 참조가 되서 제목까지 가져올 수있음

            // (5) 네모 박스가 클릭할 때마다 따라오게 할려면?
            // 포인터의 targetX값을 나의 좌표와 일치
            pointer.targetX=me.x;
        });

        // 조립 
        // div에 이미지 넣기
        this.div.appendChild(this.img);
        this.container.appendChild(this.div);

        
    }
}