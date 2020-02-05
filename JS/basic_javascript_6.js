/*function ride_Function()    {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height > 52) ? "You are tall enough" : "You are too short";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}
*/

/* CONDITIONAL OPERATOR USE!!!! has three operands. */
function oldEnough()    {
    var age = document.getElementById("age").value;
    var is_too_young = age < 18;
    var can_Vote = is_too_young ? "You are too young " : "You are old enough ";
    document.getElementById("Vote").innerHTML = can_Vote + "to vote!";
}

/* USE OF KEYWORDS IN JAVASCRIPT*/
function vehicle(Make, Model, Year, Color)  {
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "TrailHawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

function typeCar()  {
    document.getElementById("player_car").innerHTML = 
    "Erik drives a " +Erik.vehicle_color +"-colored " +Erik.vehicle_model +" manufactured in "
    +Erik.vehicle_year +" from the producer " +Erik.vehicle_make +".";
}

/*My use of Keywords(practice)*/
function foods(From, Type, CheeseyorNOT)    {
    this.foods_from = From;
    this.foods_type = Type;
    this.foods_cheesyornot = CheeseyorNOT;
}
var fy = new foods("Italy", "Spaghetti", "YES OH YES VERY");
var pierson = new foods("Korea", "Kimchi", "HELL NO!!!!");
var bamboo = new foods("Ocean", "Tuna***", "He wishes!");

function foodConsume()  {
    document.getElementById("newThis").innerHTML = 
    "Pierson really enjoys food from " +pierson.foods_from +". It usually is " +pierson.foods_type
    +" and sometimes its Cheesy... " +pierson.foods_cheesyornot;
}

function count_Function()   {
    document.getElementById("counting").innerHTML = count();
    function count()    {
        var starting_point = 1;
        function plus_One() {
            starting_point += 1;
        }
        plus_One();
        return starting_point;
    }
}
