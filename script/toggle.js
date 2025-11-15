document.getElementById("add-money-card").addEventListener("click", function(){
    document.getElementById("cash-out-cont").style.display = "none";
    document.getElementById("add-money-cont").style.display = "block";
})
document.getElementById("cash-out-card").addEventListener("click", function(){
    document.getElementById("add-money-cont").style.display = "none";
    document.getElementById("cash-out-cont").style.display = "block";
})