function calc(op){

    // op에는 +, -, *, /, % 중 하나가 전달됨

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op){
        
        case'+' : result.innerText = n1+ n2; break;
        case'-' : result.innerText = n1- n2; break;
        case'*' : result.innerText = n1* n2; break;
        case'/' : result.innerText = n1/ n2; break;
        case'%' : result.innerText = n1% n2; break;
      
    }

}