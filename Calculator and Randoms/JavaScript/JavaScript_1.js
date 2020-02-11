function color_Function()   {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_String = " is a great color";
    switch(colors)  {
        case "RED":
            color_output = "RED" + color_String;
        break;
        case "YELLOW" :
            color_output = "YELLOW" + color_String;
        break;
        case "BLUE" :
            color_output = "BLUE" + color_String;
        break;
        case "GREY" :
            color_output = "GREY" + color_String;
        break;
        case "BLACK" :
            color_output = "BLACK" + color_String;
        break;
        case "WHITE" : 
            color_output = "WHITE" + color_String;
        break;
        case "ROSEGOLD" :
            color_output = "ROSEGOLD" + color_String;
        break;
        case "SILVER" : 
            color_output = "SILVER" + color_String;
        break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

function hello_world_function() {
    var a = document.getElementsByClassName("click");
    a[0].innerHTML = "The Text has Changed loser.";
}

var box = document.getElementById("canvas");
var innerbox = box.getContext("2d");

var gradient = innerbox.createRadialGradient(100, 50, 8, 90, 100, 100);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");



innerbox.fillStyle = gradient;
innerbox.fillRect(0, 0, box.width, box.height);

