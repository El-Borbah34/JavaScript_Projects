function add_function() {
    var add = 10+10;
    document.getElementById("math").innerHTML="10+10 " + add;
}
add_function()

function sub_function() {
    var sub = 20-9;
    document.getElementById("math_2").innerHTML="20-9= " +sub;
}
sub_function()

function mult_function()    {
    var mult = 6*5;
    document.getElementById("math_3").innerHTML="5 * 6= " +mult;
}
mult_function()

function div_function() {
    var div = 49/7;
    document.getElementById("math_4").innerHTML="49 / 7= " +div;
}
div_function()

function more_math()    {
    var more = (3+3) * 10 / 5 - 21;
    document.getElementById("math_5").innerHTML="Three plus three, multiplied by ten, divided by five and then subtracted by twenty-one equal " +more;
}
more_math()

function modulus_function() { /* This math seemed kinda important Modulus Function here.*/ 
    var mod = 30 % 7;
    document.getElementById("math_6").innerHTML="when you divide 30 by 7 you get a remainder of " + mod;
}
modulus_function()

function negation_Operator()    { /* "-" literally means the opposite of or Negative form of. */
    var neg = -34;
    document.getElementById("better_math").innerHTML = -neg;
}
negation_Operator()

/*============================
        smaller tid bits
===========================*/

var p = 14;
p++;
document.write (p);

var f = 13.14;
f--;
document.write (f); /* No space shows up in basic html 3 file because i dont know how to space in javascript yet. */

window.alert(Math.random()); /*random 0 to 1 because its like that*/
window.alert(Math.random() * 100); /*this one random # between 0 and 100 */
window.alert(Math.pow(5,2)); /*POWA*/
window.alert(Math.PI); 
