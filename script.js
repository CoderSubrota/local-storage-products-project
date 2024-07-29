//submit button
let submitButton = document.querySelector("#submitButton") ;
//submit button listener
submitButton.addEventListener("click", function(){
//get input feild value
let productName = document.querySelector("#productName").value ;
let productPrice = document.querySelector("#productPrice").value ;
let brandName = document.querySelector("#brandName").value ;
let productImage = document.querySelector("#productImage").value ;
if(productImage==="" || productName==="" || brandName==="" || productPrice==="") return alert("Please fill out the form !!");
//push data into the array
let products = JSON.parse(localStorage.getItem("products") || "[]");
//create an object for get the product data
let productId = Math.floor( Math.random(121,545) * 12441) ;
let productObject = {productId:productId, productName:productName, productPrice:productPrice,brandName:brandName, productImage:productImage} ;
products.push(productObject) ;
//set data to local storage 
localStorage.setItem("products", JSON.stringify(products)) ;
if(products!=null){
    window.location = "/products.html" ;
}
});
