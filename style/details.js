const getInfo = async()=>{
    const params=new URLSearchParams(this.location.search);
    const id=params.get('id');
    const {data}=await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
    console.log(data);
    console.log(id);
}
const displayInfo=async()=>{
    const data=await getInfo();
    const images=data.images.map((img)=>
        `
        <img src='${data.images}' />
    `
    ).join(' ');
    const result = `
        <div class="product-info"
            <h2>${data.title}</h2>
            <h2>${data.category}</h2>
            <p>${data.description}</p>
        </div>
        
        <div class="product-images">
            ${images}   
        </div>
    `;
    document.querySelector(".product").innerHTML=result;
}
getInfo();
displayInfo();