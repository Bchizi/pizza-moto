// User interface
// Displaying the ordering form
function getSize() {
    var selectedValue = document.getElementById("inputSize").value;
    return parseInt(selectedValue);
}
function getCrust() {
    var selectedCrust = document.getElementById("inputcrust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("inputtop").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}
function getTotalAmount() {
    var totalAmount = (getSize() + getCrust() + getToppings()) * getQuantity();
    alert("You ordered " + getQuantity() + " pizza(s)." + "" + " Your bill is " + (totalAmount));
}
//UI interface
// $(document).ready(function () {
//     $("#select").click(function () {
//         $("#select").show();
//         $("#hform").hide();
//     });
// });
// $(document).ready(function () {
//     $("#select").click(function () {
//         $("#hform").show();
//         $("#select").hide();
//     });
// });