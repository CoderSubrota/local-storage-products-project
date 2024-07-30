let prodcutsDiv = document.querySelector(".prodcuts");
let getProducts = JSON.parse(localStorage.getItem("products") || "[]");
let countProduct = document.querySelector("#countProduct");
let productDetailsDiv = document.querySelector(".productDetails");

//count length
let countProductLength = getProducts.length ? getProducts.length : 0;
//create object to update data

if (countProductLength === 0) {
  document.querySelector("#message").innerHTML = "Products Not available !!";
}
//closeModal
function closeModal() {
  document.querySelector(".modal").style.display = "none";
  window.location.reload();
  setTimeout(() => {
    prodcutsDiv.style.display = "block";
  }, 1000);
}

//display products

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
      <div class="editAndDeleteButton">
        <div onclick="editProduct(${item.productId})"><i class="fa-solid fa-pen-to-square" style="color:cyan;"></i></div>
        <div onclick="deleteProduct(${item.productId})"><i class="fa-solid fa-trash" style="color:red;"></i></div>
      </div>
       <button onclick="productDetails(${item.productId})" class="showMoreButton">Show more</button> 
    </div>
    `;
});

//update product
function saveProduct(productId) {
  //get input feild value
  let productName = document.querySelector("#productName").value;
  let productPrice = document.querySelector("#productPrice").value;
  let brandName = document.querySelector("#brandName").value;
  let productImage = document.querySelector("#productImage").value;

  //replace object data
  let setProduct = {
    productName: productName,
    productPrice: productPrice,
    brandName: brandName,
    productImage: productImage,
    productId: productId
  };
  let filterData = getProducts.filter((item) => item.productId !== productId);
  localStorage.setItem("products", JSON.stringify([setProduct, ...filterData]));
  alert("Your product data updated successfully !!");
}

//delete product
function deleteProduct(productId){
  let confirm = window.confirm("Are you want to delete your product ??") ;
  if(confirm){
  let filterProduct = getProducts.filter((item) => item.productId !== productId) ;
  localStorage.setItem("products", JSON.stringify(filterProduct)) ;
  window.location.reload() ;
  alert("Your product deleted successfully !!") ;
  }else{
    alert("Your product is safe :)") ;
  }
}

//find product
function productDetails(productId) {
  let getProduct = getProducts.find((item) => item.productId === productId);
  prodcutsDiv.style.display = "none";
  productDetailsDiv.innerHTML = `
<div class="modal">
<div id="modalProduct">
    <img src="${getProduct.productImage}" alt="${getProduct.productName}" id="productImage2"/>
    <p> Product id : ${getProduct.productId}  </p>
   <p> Product name : ${getProduct.productName}  </p>
    <p> Product price : $${getProduct.productPrice}  </p>
    <p> Product brand : ${getProduct.brandName}  </p>
</div>
<button id="closeModal" onclick="closeModal()">Close</button>
</div>
`;
  document.querySelector(".modal").style.display = "block";
}
//edit product
function editProduct(productId) {
  let getProduct = getProducts.find((item) => item.productId === productId);
  prodcutsDiv.style.display = "none";
  productDetailsDiv.innerHTML = `
  <div class="modal">
    <div class="productDiv">
            <h2 class="formHeadText">Edit Product</h2>
            <div>
                <input type="text" name="productName" value="${getProduct.productName}" id="productName" placeholder="Enter your product name" required/>
            </div>
            <div>
                <input type="text" name="productPrice" value="${getProduct.productPrice}" id="productPrice" placeholder="Enter your product price" required/>
            </div>
            <div>
                <input type="text" name="brandName"  value="${getProduct.brandName}" id="brandName" placeholder="Enter your product brand name" required/>
            </div>
           <div>
            <input type="url" name="productImage"  value="${getProduct.productImage}" id="productImage"  placeholder="Enter your product image url" required/>
           </div>
           <div>
            <button type="submit" onclick="saveProduct(${getProduct.productId})" id="submitButton">Save product</button>
           </div>
        </div>
  <button id="closeModal" onclick="closeModal()">Close</button>
  </div>
  `;
  document.querySelector(".modal").style.display = "block";
}

countProduct.innerHTML = countProductLength;
