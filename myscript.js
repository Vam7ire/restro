

window.onscroll=function(){
    scrollFunction()
};

function scrollFunction(){
    var myHeader = document.getElementById("myHeader");
    var logo = document.getElementById("myLogo");
    var heading = document.getElementById("heading");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        myHeader.style.padding = "25px";
        myHeader.style.fontSize="14px";
        myHeader.style.backgroundColor = 'black';
        heading.style.backgroundColor = "black";
        

    }
    else{
        myHeader.style.padding = "30px";
        myHeader.style.fontSize="20px";
        myHeader.style.backgroundColor = 'transparent';
        heading.style.backgroundColor = "transparent";
        
    }
}



document.getElementById("placeOrder").onclick = function(){
    var price = document.querySelector("myPrice").value;
    var quantity = document.getElementById("myOrder").value;
    var orderDetails = document.getElementById("orderDetails");
    price = number(price);
    totalPrice = price * quantity;
    totalPrice = number(totalPrice);
    document.getElementById("totalPrice").innerHTML= "Total: You need to pay " + totalPrice;
    orderDetails.innerHTML  = "Please wait a while your food is ready";

}