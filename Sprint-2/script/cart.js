var cart = document.getElementById("cart");
var items = JSON.parse(localStorage.getItem("add"))


cartItems(items)
function cartItems(el){
  var tp =0
   cart.innerText =""

  el.map(function (el,index){
    var div =document.createElement("div")

    var img =document.createElement("img");
    img.src =el.strMealThumb +"/preview"
    img.style.width ="200px"

    var name =document.createElement("p");
    name.innerText =el.strMeal;

    var price =document.createElement("p");
    price.innerText = ( Math.floor(Math.random()*400)+100);
      tp += +price.innerText;



    // }
    var remove =document.createElement("button")
    remove.textContent ="Remove"
    remove.addEventListener("click",function(){
      removeitem(index)
    })

    div.append(img,name,price,remove)
    cart.append(div)
  })
  var pr =document.getElementById("price")
 pr.textContent = "Total Cart Value : Rs." + tp;
}




function removeitem(index){
  items.splice(index,1)
  localStorage.setItem("add",JSON.stringify(items));
  
  cartItems(items)
  
}
