let prodcutsDiv = document.querySelector(".prodcuts");
let getProducts = JSON.parse(localStorage.getItem("products") || "[]");
let countProduct = document.querySelector("#countProduct");
let search = document.querySelector("#search");
let productDetailsDiv = document.querySelector(".productDetails");


//
search.addEventListener("mouseout", function () {

  if(search.value==="") return ;

  let getProductsData = getProducts.filter((item) =>
    item.productName
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase())
  );
  getProductsData.map((item) => {
    prodcutsDiv.innerHTML =
      prodcutsDiv.innerHTML +
      `
    <div id="product">
        <img src="${item.productImage}" alt="${item.productName}" class="productImage"/>
        <p> Product id : ${item.productId}  </p>
       <p> Product name : ${item.productName}  </p>
        <p> Product price : $${item.productPrice}  </p>
        <p> Product brand : ${item.brandName}  </p>
    </div>
    `;
  });

  countProduct.innerHTML = getProductsData.length;
  search.value=""
});


search.addEventListener("mouseenter", function () {
  prodcutsDiv.innerHTML = "";
}) ;

