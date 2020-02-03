/*This is CONCAT() it will combine all these var. */
function bigSentence()  {
    var string_1 = "This will ";
    var string_2 = "be a really ";
    var string_3 = "long run on sentence ";
    var string_4 = "that I am making to show ";
    var string_5 = "that I am slowly understanding this.";
    var all_sentences = string_1.concat(string_2, string_3, string_4, string_5);
    document.getElementById("concatenate").innerHTML = all_sentences;
}
bigSentence()
/*=========SLICE AND SEARCH METHODS=======ALSO MULT THINGS BEING CALLED BACK============*/
function slice_and_search_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    var searching = sentence.search("play");
    document.getElementById("slice").innerHTML = section.toUpperCase();
    document.getElementById("search").innerHTML = searching;
}

var bamboo = 2;
var fy = "My girlfriend is smarter than me, in everything. except cleaning";
function divide_function()  {
    var p = 65 + 5;
    var f = 96/97;
    var string = p / bamboo;
    document.getElementById("id_String_4").innerHTML = fy.valueOf();
    document.getElementById("id_String").innerHTML = string.toString();
    document.getElementById("id_String_2").innerHTML = f.toPrecision(4);
    document.getElementById("id_String_3").innerHTML = f.toFixed(2);
}