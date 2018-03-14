var side1 = parseInt(prompt("Enter side 1"))
var side2 = parseInt(prompt("Enter side 2"))
var side3 = parseInt(prompt("Enter side 3"))

var s = (side1 + side2 + side3) / 2

var area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3))

alert("Area is: " + area)