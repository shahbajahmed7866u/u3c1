document.querySelector("#add_more_product").addEventListener("click",hoho)


function hoho(){
window.location.href="index.html"
}

var productsArr = JSON.parse(localStorage.getItem("products"))

showProduct(productsArr)



function showProduct(productsArr){
productsArr.forEach(function(elem,index) {
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src=elem.image
    var type = document.createElement("p")
    type.innerText=elem.type
    var price = document.createElement("p")
    price.innerText=`${elem.price} Rs`
    var desc = document.createElement("p")
    desc.innerText=elem.desc
    var remove = document.createElement("button")
    remove.innerText= "Remove"
    remove.setAttribute("id","remove_product")
    remove.addEventListener("click",function(){
        deleteFunc(elem,index)
    })
    div.append(image,type,price,desc,remove)
    document.querySelector("#all_products").append(div)
});
}

function deleteFunc(elem,index){
    productsArr.splice(index,1)
    // console.log(productsArr)
    localStorage.setItem("products",JSON.stringify(productsArr))
    var newProductArr = JSON.parse(localStorage.getItem("products"))
    document.querySelector("#all_products").innerHTML=""
    showProduct(newProductArr)
    window.location.reload()
}

console.log(productsArr)