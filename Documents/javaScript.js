function givePrice()
{
    let product = 15;
    let package = 3;
    let sending = 6;
    let totalPrice = product + package + sending;

    document.getElementById("price").innerHTML = totalPrice + "$"
}