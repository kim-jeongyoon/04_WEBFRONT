
/* 아이디(영어 소문자+ 숫자 / 5글자 이상)*/
document.getElementById("id").addEventListener("keyup",function(){

    const regEx1 = /^[a-z0-9]{5,}$/;

    const result1 = document.getElementById("result1");

    if(regEx1.test(this.value)){
        result1.innerText = "아이디 사용가능"

        result1.classList.add("confirm");
        result1.classList.remove("error"); 

    } else{
        result1.innerText = "아이디 불가능"

        result1.classList.add("error");
        result1.classList.remove("confirm"); 
 
    }
})




/*비밀번호 영문대/소문자 + 특수문자 +숫자 8글자 이상 */
document.getElementById("pw1").addEventListener("keyup",function(){

    const regEx2 = /^[A-Za-z0-9!@#$%^&*]{8,}$/;

    const result2 = document.getElementById("result2");

    if(regEx2.test(this.value)){
        result2.innerText = "비밀번호 사용가능"

        result2.classList.add("confirm");
        result2.classList.remove("error"); 

    } else{
        result2.innerText = "비밀번호 불가능"

        result2.classList.add("error");
        result2.classList.remove("confirm"); 
 
    }
})

/*비밀번호 확인(비밀번호와 일치했을 때 일치한다 표시) */
document.getElementById("pw2").addEventListener("keyup",function(){

    const result3 = document.getElementById("result3"); 
    const  p1 = document.getElementById('pw1');
    const  p2 = document.getElementById('pw2');

    if(p1.value==p2.value){

        result3.innerText = "비밀번호 일치"

        result3.classList.add("confirm");
        result3.classList.remove("error"); 

    } else{
        result3.innerText = "비밀번호 불일치"
        result3.classList.add("error");
        result3.classList.remove("confirm"); 
 
    }

})


/* 이름(한글 2글자 이상) */
document.getElementById("user-name").addEventListener("keyup",function(){

    const regEx4 = /^[가-힣]{2,}$/;

    const result4 = document.getElementById("result4");

    if(regEx4.test(this.value)){
        result4.innerText = "가능"

        result4.classList.add("confirm");
        result4.classList.remove("error"); 

    } else{
        result4.innerText = "2글자 이상 입력하시오"

        result4.classList.add("error");
        result4.classList.remove("confirm"); 
 
    }

})

/*휴대폰번호(숫자만 단, 010으로 시작) */

document.getElementById("tel").addEventListener("keyup",function(){

    const regEx5 = /^010[0-9]{8,}/;

    const result5 = document.getElementById("result5");

    if(regEx5.test(this.value)){
        result5.innerText = "가능"

        result5.classList.add("confirm");
        result5.classList.remove("error"); 

    } else{
        result5.innerText = "불가"

        result5.classList.add("error");
        result5.classList.remove("confirm"); 
 
    }
})


/*주민등록번호(단,7번째 숫자는 1,2,3,4 만 가능)*/
//[6글자]-[]

document.getElementById("user-num").addEventListener("keyup",function(){

    const regEx6 = /^[0-9]{6,}-[0-9]{7,}$/;

    const result6 = document.getElementById("result6");

    if(regEx6.test(this.value)){
        result6.innerText = "가능"

        result6.classList.add("confirm");
        result6.classList.remove("error"); 

    } else{
        result6.innerText = "불가"

        result6.classList.add("error");
        result6.classList.remove("confirm"); 
 
    }
})

/*이메일(@무조건 포함, 맨뒤는 .com으로 끝 날것*/
document.getElementById("email").addEventListener("keyup",function(){
    const regEx7=/.com$/;

    

    const result7 = document.getElementById("result7");

    if(regEx7.test(this.value)){
        result7.innerText = "가능"

        result7.classList.add("confirm");
        result7.classList.remove("error");

    } else{
        result7.innerText = "불가능"

        result7.classList.add("error");
        result7.classList.remove("confirm"); 
 
    }
})
