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
 * 
 * DB(db_study)
 * table(product_tb)
 * product_id , product_name(유니크) , product_price , product_size(SS, S , M , L, XL, XXL)
 */

    async function handleAddClick() {
        const productInputs = document.querySelectorAll(".product-input");
    
    const product = {
        name: productInputs[0].value,
        price: productInputs[1].value, 
        size: productInputs[2].value 
    };
        const jsonData = JSON.stringify(product);

    const option = {
        method: "POST",
        Headers: {
            "Content-Type":"application/json"
        },
        body : jsonData 
}

    try {
        const response = await fetch ("http://localhost:8080/product/product", option)
        if(!response.ok) {
            throw await response.json();
        }
        
        const json = await response.json();
        
        console.log(json);
    } catch {
        console.log(error);
        alert(error.errormessage);
    }
}