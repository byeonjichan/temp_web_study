 // 자바스크립트 배열은 자바의 Arraylist와 유사

 let numbers1 = [];
 let numbers2 = new Array();

 numbers1.push(10);
 console.log(numbers1);
 numbers1.push(20);
 console.log(numbers1);
 console.log(numbers1[0]);
 numbers1[0]=30;
 console.log(numbers1[0]);
 numbers1[2] = 50;
 console.log(numbers1);
 numbers1[5] = 100;
 console.log(numbers1);
 console.log(numbers1[3]);

 for(let i=0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
 }

 //향상된 for문 해당 배열의 마지막 값이 있는데까지 반복
 for(let num of numbers1) {
    console.log(num);
 }
 // 폴이치문은 빈 값 무시
 numbers1.forEach(n => console.log(n));
