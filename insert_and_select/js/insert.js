async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    // 제이슨 데이터로 변환
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    // 순서가 비동기 실행이 돌아오고나서 then 함수 실행됨           
    // fetch("http://localhost:8080/insert_and_select/data/addition", option)
    // .then((response) => {
    //     response.json()
    //     .then((json)=> {
    //         console.log(json)
    //     }).catch((error) => {
    //         console.log("프로미스 예외처리");
    //     });
    // });
    // async 함수로 바꾸었을때 코드
        try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option)
        if (!response.ok) {
            throw await response.json();
        }
        console.log(response);

        const json = await response.json();

        console.log(json);

        console.log("test");

        } catch(error) {
            console.log(error)
            alert(error.errorMessage)
     }


    //제이슨 데이터를 팔스 데이터로 변환
    // const dataObj = JSON.parse(jsonData);
    // console.log(dataObj);
}