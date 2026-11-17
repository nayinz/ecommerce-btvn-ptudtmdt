// this variable has global scope
boxClass = 'movingDiv';
// define functions in this file
function outputBox(num) {
box = "<div class='" + boxClass + "' id='div" + num + "'>";
box += "This is div " + num;
box += "</div>";
return box;
}