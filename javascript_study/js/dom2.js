const submitButton = document.querySelector(".input-submit");

// 이벤트 속성
submitButton.onclick = () => {
    const input = document.querySelector(".inputs");
    const dataList = document.querySelector(".data-list");
    
    dataList.innerHTML += `<li>${input.value}</li>`; //태그 안에다 자식태그 추가할때 사용
}
 
/* let sublintbutton = {
    onclick: null
}
submitButton.onclick  = () => {    
}
*/