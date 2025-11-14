

document.getElementById("login-btn").addEventListener("click", function( event ){
    event.preventDefault();

    const ackNumber = document.getElementById("ack-number").value;

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    if(ackNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href = "./main.html";
        }
        else{
            alert("The Pin is '1234'");
        }
    }
    else{
        alert("Give a Valid Number");
    }
})