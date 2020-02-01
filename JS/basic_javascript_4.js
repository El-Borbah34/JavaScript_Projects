function FUMA() {
    var cadets = {
        Name: "Logan White",
        Age: "28",
        From: "California",
        Company: "Echo",
        Random: 5455345345,
        Rank: "Staff Sargeant"
    };
    delete cadets.Company;
    document.getElementById("logan_info").innerHTML = cadets.Company;
}