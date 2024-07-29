let prodcutsDiv = document.querySelector(".prodcuts");
let getProducts = JSON.parse(localStorage.getItem("products") || "[]");
let countProduct = document.querySelector("#countProduct");
let productDetailsDiv = document.querySelector(".productDetails");

let countProductLength = getProducts.length ? getProducts.length : 0;

if (countProductLength === 0) {
  document.querySelector("#message").innerHTML = "Products Not available !!";
}

function productDetails(productId) {
let getProduct = getProducts.find((item) => item.productId === productId) ;

productDetailsDiv.innerHTML = `
<div>
    <img src="${getProduct.productImage}" alt="${getProduct.productName}" id="productImage2"/>
    <p> Product id : ${getProduct.productId}  </p>
   <p> Product name : ${getProduct.productName}  </p>
    <p> Product price : $${getProduct.productPrice}  </p>
    <p> Product brand : ${getProduct.brandName}  </p>
</div>
`; 
productDetailsDiv.style.visibility = "visible" ;
}

getProducts.map((item) => {
  prodcutsDiv.innerHTML =
    prodcutsDiv.innerHTML +
    `
    <div id="product">
        <img src="${item.productImage}" alt="${item.productName}" class="productImage"/>
        <p> Product id : ${item.productId}  </p>
       <p> Product name : ${item.productName}  </p>
        <p> Product price : $${item.productPrice}  </p>
        <p> Product brand : ${item.brandName}  </p>
       <a href="#product">  <button onclick="productDetails(${item.productId})" class="showMoreButton">Show more</button>  </a>
    </div>
    `;
});

countProduct.innerHTML = countProductLength;
