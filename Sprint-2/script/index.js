let meal_div = document.getElementById("meal")

showMeal()
async function showMeal(){

    let url =`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
  try{
    let resp = await fetch(url)
    let data =await resp.json()

     let x =data.meals
     Meal(x)
    console.log(x)
  }
  catch(err){
      console.log(err)
  }
}

function Meal(el){

    el.map(function (el){
        var div =document.createElement("div")

        var img =document.createElement("img");
        img.src =el.strMealThumb +"/preview"
        img.style.width ="200px"

        var name =document.createElement("p");
        name.innerText =el.strMeal;

        var price =document.createElement("p");
        price.innerText = 'Rs.' + (Math.floor(Math.random()*400)+100);
        var button =document.createElement("button")
        button.innerText = 'Add to cart'
        button.addEventListener('click',function(){
            addcart(el)
        })
        // button.onclick =function g(){
        //     addcart(el)
        // }

        div.append(img,name,price,button)
        meal_div.append(div)
    })
 
}
var cart = JSON.parse(localStorage.getItem("add")) || [];
function addcart(el){
 cart.push(el);
 localStorage.setItem("add",JSON.stringify(cart))

  
}
  var items =document.getElementById("cartlength")
    items.textContent = "No. of items : " + cart.length 
