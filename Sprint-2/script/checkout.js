function al(){
    setTimeout(function (){
       alert("Your order is accepted")
    },3000)

    setTimeout(function (){
        alert("Your order is being cooked")
     },8000)

     setTimeout(function (){
        alert("Your order is ready")
     },10000)

     setTimeout(function (){
        alert("Order out for delivery")
     },12000)
}
al()