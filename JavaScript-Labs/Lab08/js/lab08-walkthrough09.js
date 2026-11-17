/* code goes here */
var isCanadian = true;
// define an anonymous function as an object
var tax = function () {
    if (isCanadian) {
        return 0.05;
    } else {
        return 0.0;
    }
};
function calculateTotal(price, quantity) {
var amount = price * quantity;    
return amount + calculateTax(amount, function () {
if (isCanadian) {
return 0.05;
} else {
return 0.0;
}
});
}