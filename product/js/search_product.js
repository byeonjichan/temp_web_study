async function handlesearchClick() {
    try {
        const response = await fetch ("http://localhost:8080/product/products")
        if(!response) {
            throw await response.json();
        }
        const responseData = await response.json();
        const productList = document.querySelector(".product-list")
        productList.innerHTML +=``;
        
        for (let product of responseData.data) {
            productList.innerHTML +=`
            <tr>
            <td>${product.productId}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.size}</td>
            </tr>
            `;
        }

    } catch(error) {
        console.log(error);
    }
}