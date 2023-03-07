
function add(){
    // 1) id  속성값이 "area1"인 요소를 얻어와서 변수(변수명: area1)에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적

        area1.innerHTML += "<span class='love'>사랑해</span>"

}

