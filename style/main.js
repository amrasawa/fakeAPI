const getProduct=async ()=>{
    const {data} = await axios.get("https://dummyjson.com/products");
    console.log(data);
    return data;
}
const getData = async ()=>{
    const data = await getProduct();
    console.log(data.products);
    const result = data.products.map((product)=>
        `<div class="product">
            <h2>${product.title}</h2>
            <img src=${product.thumbnail} alt="product-image" />
            <a href="details.html?id=${product.id}">details</a>
        </div>    
    `
    ).join('');
    console.log(result);
    document.querySelector(".products").innerHTML=result;
}

getData();