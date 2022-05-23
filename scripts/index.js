//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",haha)

var arr =  JSON.parse(localStorage.getItem("products")) || []


function haha(){
    event.preventDefault();
    
var typeV = document.querySelector("#type").value
var descV = document.querySelector("#desc").value
var priceV = document.querySelector("#price").value
var imageV = document.querySelector("#image").value

function Sample (t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

var obj = new Sample (typeV,descV,priceV,imageV)
arr.push(obj)

console.log(arr)

localStorage.setItem("products",JSON.stringify(arr))

document.querySelector("#type").value=""
 document.querySelector("#desc").value=""
 document.querySelector("#price").value=""
document.querySelector("#image").value=""
}



document.querySelector("#show_button").addEventListener("click",ofoh)


function ofoh(){
    window.location.href="inventory.html"
}
