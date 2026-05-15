let length;
let width;

function calculareArea() {
 legth = parseFloat(document.getElementById("length").value);
 width = perseFloat(document.getElementById("width").value);

let area = length * width;

document.getElementById("result").innerText = "The area of the rectangle is: ${area}";
}
