    /*--------------------------------------------------------
        두 수 a,b에 대한 절대값을 반환하는 함수!
       --------------------------------------------------------*/
       function getAbs(a,b){
        return Math.abs(a-b);        // 함수를 여러개 사용하지 않기 위해 매개변수로 받자. 
                                               // 함수를 호출한 실행부가 결과를 가지고
                                               // 호출한 곳으로 되돌아감.
    }
    document.write(getAbs(5,13));

        /*--------------------------------------------------------
        랜덤(random) 구하는 함수 . 1
        n을 넣으면 0~n까지까지 포함하여 랜덤한 수를 반환하는 함수
       --------------------------------------------------------*/
       function getRandom(n){
            // 1보다 작은 실수 0.0xxx ~ 0.9xxx
            var r = Math.random();
            // floor로 소수점을 버린다.
            return Math.floor((n+1) * r);
        }

        /*--------------------------------------------------------
        랜덤(random) 구하는 함수 . 2
        ex. 7과 23 사이의 랜덤값을 반환.
        a   :   7(최소값)
        b   :   23(최대값)
       --------------------------------------------------------*/
       function getRandomBetween(min,max){
           // 일단 최소값 이상은 무조건 확보 => 즉, 반환되어야 한다.
           // return Math.floor(Math.random() * (max - min+1)) + min; 
            return getRandom(max-min) + min;
        }
    /*--------------------------------------------------------
       숫자에 0을 붙인 날짜 처리 ex. 06 01
       매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서 
       (두자리 한자리 판단마저도 여기에서 알아서 해준다.)
      --------------------------------------------------------*/
      function getZeroDate(n){
          if(n<10){ // n이 10보다 작으면 0을 접두어 붙이자.
            n="0"+n;
          }
          return n;
      }

    /*--------------------------------------------------------
       아래의 함수는..
       두 물체간 충돌여부를 판단해주는 함수이다.
            box1 : 판단 대상 요소1 ex) div 
            box2 : 판단 대상 요소2 ex) div
      --------------------------------------------------------*/  
      function collisionCheck(box1, box2) {
        //두물체간 충돌 여부 판단 
        var x1=parseInt(box1.style.left);
        var width1=parseInt(box1.style.width);
        var y1=parseInt(box1.style.top);
        var height1=parseInt(box1.style.height);
        
        var x2=parseInt(box2.style.left);
        var width2=parseInt(box2.style.width);
        var y2=parseInt(box2.style.top);
        var height2=parseInt(box2.style.height);
    
    
        /*
        조건1)x축 충돌: me의 x축+width1를 더한값은 target의 x2축 이상일 경우
        조건2)y축 충돌: me의 y축+height1를 더한 값이  target의 y2축 이상일 경우
        조건3)me의  y1값은 target의  y2에 height2를 더한값보다 같거나 작아야 함
        조건4)me의  x1값은 target의  x2에 width2를 더한값보다 같거나 작아야 함
        */
        var result = (x1+width1 >= parseInt(box2.style.left))
        && (y1+height1)>=parseInt(box2.style.top) 
        && y1 <=(y2+height2) 
        && x1 <=(x2+width2)  
    
       return result;
    }  

    /*--------------------------------------------------------
       해달 월의 총 '일'수 구하기
       즉, 마지막 날 구하기
        ex. 1일 -> 31일로 조작 , 10월 -> 9월
        mm : 구하고 싶은 월 을 의미

        주의) 자바스크립트에서 월은 0부터 시작하므로
                10월 구하려면 9를 넘겨야 한다.(-1)
      --------------------------------------------------------*/ 
      function getLastDate(yy,mm){
        // 현재 날짜 -> 조작이 가해져야 한다.
        var d = new Date();
        d.setFullYear(yy);
        // 다음달로 넘어간다.왜? (0)을 대입하면 마지막 달의 마지막 일로 넘어온다.
        d.setMonth(mm+1);
        d.setDate(0);

        // 마지막날을 반환
        return d.getDate();     
      }    
       