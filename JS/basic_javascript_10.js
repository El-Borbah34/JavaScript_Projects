/*==============STRING LENGTH===========*/
function comic()    {
var dan_clowes = "I really want to go see Dan Clowes on Sunday at Floating World Comic";
var CLOWES = dan_clowes.length;
document.getElementById("dan").innerHTML = CLOWES;
}
comic();

/*==========LOOP FIRST=============*/
function loop_Function() {
    var i = 1;
    var sent = "";
    while (i <= 10)  {
        sent += "<br>"+ "<br>" + i; /*same as *sent = sent +* */
        i++;
    }
    document.getElementById("loop").innerHTML = sent;
}

/*====================FOR LOOP===============*/
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < instruments.length; y++) {
        content = content + instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

/*===============ARRAY!!!!==================*/
function cat_array()    {
    var cats = []
    cats[1] = "Bamboo";
    cats[2] = "Cactus";
    cats[3] = "jake's cat";
    cats[4] = "Bacon";
    document.getElementById("name_ofCats").innerHTML = "The Cat is named " +cats[4] +" and he loves to eat everything.";
}

function constant_Function()    {
    const musical_instrument = {type: "guitar", brand: "Fender", color: "Black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "$900";
    document.getElementById("constant").innerHTML= "The cost of the " + musical_instrument.type +" was " + musical_instrument.price +".";
    document.getElementById("color").innerHTML = "This should be a different color than what was in my Consta value and it is " + musical_instrument.color;
}

var dogs = "Pitbull";
document.getElementById("dog").innerHTML = dogs;
function let_Function() {
    let dogs = "this was annoying because it doesnt work on properties and values";
    document.getElementById("dogz").innerHTML = dogs;
}
document.getElementById("dogzs").innerHTML = dogs;

var car = {
    make: "Honda",
    model: "Civic",
    year: "2012",
    color: "gun metal",
};
document.getElementById("car_object").innerHTML = car.make;

function change()   {
    let car = {make: "Fred Flintstones car", model: "Foot Powered", year:"20 B.C.", color: "gun metal"};
    document.getElementById("freds_car").innerHTML = car.make + car.model;
};
change(); // this will run the function. 

function break_continue()   {
    var countdown = ""
    for (b = 0; b < 10; b++)    {
        if (b === 5) {continue;}
      
        countdown += "This is " +b + "<br>";
    }
    document.getElementById("break_and_continue").innerHTML = countdown;
}


var countdown_2 = "";
for(v = 0; v < 10; v++) {
if (v === 3) {break};
countdown_2 += "This number is " +v +"." +"<br>";
}
document.getElementById("continue").innerHTML = countdown_2;