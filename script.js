function myFunction() {
    let cupsDrank, response;
    cupsDrank = document.getElementById("cupsDrank").value; // moved .value outside parentheses, with help from Clyde since we hadn't covered this in class yet
    
    if (cupsDrank < 4) { // wrong variable name, changed cups to cupsDrank
        response = "You are fine, maybe have another cup!";
    }

    else if (cupsDrank >= 4) {
        response = "Run to the bathroom NOW!"; // wrong variable name, changed talk to response
    }

    document.getElementById("result").innerHTML = response; // added this line of code so response would appear on index.html webpage

    console.log(response);
}
