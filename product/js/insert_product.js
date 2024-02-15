/**
 * servlet 프로젝트명: product
 * group_id: com.study
 * artifact_id: product
 * name : product
 * jdk: 11
 * dependencies
 * 1. lombok
 * 2. jsp
 * 3. gson
 * 4. mysql
 * 
 * package
 * com.study.product
 *      config -DBConfig
 *      dao - productDao
 *      entity - Product
 *      filter - CommonFilter    
 *      servlet - InsertProductServlet(/product, POST)
 *              - SearcgProductServlet(/products, GET)
 *  개발 순서
 *  filter -> 
 *  InsertProductServlet -> util -> dto  제이슨을 문자열로 변환 / 지슨 객체로변환 /포스트맨으로 요청 확인가능
 *  config -> 
 *  dao -> service -> vo / 싱글톤으로 생성
 *  SearcgProductServlet ->
 * 
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id , product_name(유니크) , product_price , product_size(SS, S , M , L, XL, XXL)
 */

    async function handleAddClick() {
        const productInputs = document.querySelectorAll(".product-input");
    
    const product = {
        productName: productInputs[0].value,
        productPrice:parseInt(productInputs[1].value), 
        productSize: productInputs[2].value 
    };
        const jsonData = JSON.stringify(product);

        try {
    const response = await fetch ("http://localhost:8080/product/product",{
        method: "POST",
        Headers: {
            "Content-Type":"application/json"
        },
        body : jsonData 
    }); 

    if (!response.ok) {
        throw await response.json();
    }
    const responseData = await response.json();
    console.log(responseData);
    alert(`${responseData.successCount}건의상품 추가 완료`);
    
        } catch(error) {
            alert(error?.errorMessage);
        }
    }