document.write(typeof "These are words");
document.write(typeof 3);               /*defined data in the variable*/

/* add "test" to which ever getElementbyID and remove out of "comment" you want to use */
function my_Function()  {
    /*document.getElementById("test").innerHTML = 0/S0;*/
    /*document.getElementById("test").innerHTML = isNaN("this is a string of text");*/
    document.getElementById("test").innerHTML = isNaN("3434");
}

/* Prints number in a better fashion than just document.write */
document.getElementById("test_2").innerHTML = 2E310;
document.getElementById("test_3").innerHTML = -3E310;
document.getElementById("test_4").innerHTML = 3 > 10;
document.getElementById("test_5").innerHTML = 10 > 3;

console.log(45 +5);
console.log(7 > 14);
console.log(50 > 30);


document.getElementById("test_6").innerHTML = "60" + 10; /*Type coercion in JavaScript connection of different data types*/ 
document.getElementById("test_7").innerHTML = 10 + 5 == 15;
document.getElementById("test_8").innerHTML = (5 +10) == 10; /*Equal to */

/* assigning var to other var that have the SAME data and data VALUE. */
b = "34";
p = 34;
f = 34;
dusty = "this is stuff";
john = "this is stuff";
document.getElementById("test_9").innerHTML = p === f;
document.getElementById("test_10").innerHTML = b === p;
document.getElementById("test_11").innerHTML = dusty === john;

/* && is and || is or */
document.getElementById("test_12").innerHTML = (5 > 2 && 10 > 6);
document.getElementById("test_13").innerHTML = (5 < 2 && 10 < 6);
document.getElementById("test_14").innerHTML = (5 > 4 || 10 < 6);

/* NOT will indicate that the element is false and return a "true" statement. and i also made this an "onclick" change. */
function not_Statement()    {
    document.getElementById("test_15").innerHTML = !(5 > 6);
}

function not_Statement_2()  {
    document.getElementById("test_17").innerHTML = !(17 > 10);
}

