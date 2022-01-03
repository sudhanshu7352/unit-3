var cart = document.getElementById("cart");
var items = JSON.parse(localStorage.getItem("add"))
var tp =0

cartItems(items)
function cartItems(el){
  el.map(function (el){
    var div =document.createElement("div")

    var img =document.createElement("img");
    img.src =el.strMealThumb +"/preview"
    img.style.width ="200px"

    var name =document.createElement("p");
    name.innerText =el.strMeal;

    var price =document.createElement("p");
    price.innerText = ( Math.floor(Math.random()*400)+100);
      tp += +price.innerText

    // }
    var remove =document.createElement("button")
    remove.textContent ="Remove"
    remove.addEventListener("click")

    div.append(img,name,price,remove)
    cart.append(div)
  })
}

var price =document.getElementById("price")
price.textContent = "Total Cart Value : Rs." + tp