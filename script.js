
/* ask how many km they have to travel*/
const kmNumber = Number(prompt ("Indica km devi percorrere"));
console.log(kmNumber);

/* ask how many years old is the passenger */
const passengerAge = Number(prompt ("Scrivi l'età del passeggero"));
console.log(passengerAge);

/* km price */
const kmPrice = kmNumber * 0.21;
console.log(kmPrice);

/* discount under 18 */
const discountUnder18 = .20;

/* discount over 65 */
const discountOver65 = .40;

if (passengerAge < 18){
    let totalPrice = (kmPrice * discountUnder18) 
    console.log(totalPrice); 
    alert( totalPrice.toFixed(2) );
} else if (passengerAge > 65){
    let totalPrice = (kmPrice * discountOver65) 
    totalPrice.toFixed(2)
    alert( totalPrice.toFixed(2) );
}else {
    let totalPrice = (kmPrice)
    alert( totalPrice.toFixed(2) );
}