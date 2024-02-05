//자바 스크립트 객체 형태 = {key:value, key:value} 쉼표로 구분(중괄호 자체가 객체)

let student = {
    name: "변지찬",
    age : 28
}
console.log(student);
console.log(typeof(student));
console.log(student.name);


class Student {
    name;
    age;

    //생성자
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

let s = new Student("변지찬" , 28);
// s.name = "변지찬";
// s.age = 28;
console.log(s);

// 멤버 변수명 앞에 #을 붙이면 private이 된다 ./(게터 세터 사용해야함)
class User {
    #username;
    password;

    set setUsername(username) {
        this.#username = username;
    }
    get username(){
        return this.#username;
    }
}

let user = new User();
user.setUsername = "jichan";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "jichan");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));