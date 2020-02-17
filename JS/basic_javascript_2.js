var guy = "Pierson Han"

var cat = "Bamboo Cat"
var cat = cat.fontcolor("purple")

function displayDate()  {
    document.getElementById("time").innerHTML = Date();
    
}

/*Both the ABOVE and BELOW are calling of functions. the getidby is the confusing part */
function moreWords()    {
    var letters = "This is kinda confusing";
    letters += " and I am taking along time to understand it";
    document.getElementById("connected").innerHTML = letters;
}
moreWords()             /*Need to Call the FUNCTION INTO EXISTENCE in JAVASCRIPT!!*/ 


function toCelsius(f)   {
    return(5/9) * (f-32);
}
document.getElementById("temp").innerHTML = toCelsius(76)
/*learned that i need to check developer tools under CONSOLE to figure out my problems with JAVASCRIPT.*/

$(function()    {
    $('body').removeClass('fade-out');
});

function validateForm() {
    var x = document.forms["theForm"]["phoneNumber"].value;
    if (x == "")    {
        alert("Phone Number must be filled out");
        return false;
    }
}

function openForm()     {
    document.getElementById("myForm").style.display = "block";
}

function closeForm()    {
    document.getElementById("myForm").style.display = "none";
}