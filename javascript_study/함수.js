
function add(num1,num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); //EL 표현식
    return num1 +num2; 
}

console.log(add(10,20));

//자바에서는 안됨 JS는 함수 자체의 주소값도 불러옴 // 함수를 변수에 담을수 있다!
let addFunction = add;

console.log(add);
console.log(addFunction(30,40));

let user = {
    username: "jichan",
    password: "1234",
    addFunction: function add(a,b) {
        return a + b
    }
}
console.log(user.addFunction(10,20));

//익명 함수
let sub = function (a, b) {
    return a - b;
}

let result1 = sub(10,5);
console.log(result1);

console.log(sub);

// 화살표함수(람다식)
let div = (a, b) => {
    return a / b ;
}

console.log(div(10,5));

div = (a, b) => a / b;
console.log(div(20,5));
console.log(div);