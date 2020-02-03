/* GLOBAL AND LOCAL VAR */
var p = 20

function add_Function() {
    document.getElementById("math").innerHTML = add_numbs(); 
    function add_numbs()    {
        var forever = p + 20;
        var o = 50;
        function another_num()  {
            o += forever;
        }
        another_num();
        return o;
    }
}


/*MORE LOCAL AND GLOBAL VAR, also the use of CONSOLE.LOG same thing as above.*/
function sub_Function() {
    document.getElementById("minus").innerHTML = "50 minus 20 is " +console.log(o - p);
}
sub_Function()


/* Introduction into IF statements. */
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "How are you today.";
    }
}

/*WROTE MY OWN SHITTY IF STATEMENT */
function compare()  {
    var t = 16;
    var y = 10;
    if (t > y)  {
        document.getElementById("tANDy").innerHTML= "This worked";
    }
}

/*MADE MY FIRST IF AND ELSE STATEMENT AND LEARNED HOW TO MYSELF, DAMN DANIEL!!!*/
function age_Function()     {
    var yearsOld = document.getElementById("age").value;
    if (yearsOld >= 18) {
        var answer = "Yes you can vote.";
    }
    else  {
        var answer = "Nope Sorry loser.";
    }
    document.getElementById("outcome").innerHTML = answer;
}

function jellybean_Function()   {
    var beancount = document.getElementById("beans").value;
    var response;
    if (beancount <= 2) {
        response = "Please get some more beans";        
    }
    else if (beancount >= 3 == beancount < 10)   {
        response = "Nice Beans man";
    }
    else    {
        response = "Chill out man, you got toooooooo many beans";
    }
    document.getElementById("numberBeans").innerHTML = response;
}