function validateForm() {
    var userInput = document.forms["myForm"]["firstname"]["lastname"].value;
    if (userInput == "") {
        alert("Yo fill out everything!!");
        return false;
    }
}