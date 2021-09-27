// Körs när sidans DOM-träd har laddat klart
$(document).ready(function () {


    

});

// Validering av kontaktformulär
function validateForm() {
    let firstName = document.forms["form"]["fname"].value;
    let lastName = document.forms["form"]["lname"].value;
    let email = document.forms["form"]["email"].value;
    let phone = document.forms["form"]["phone"].value;
    let textArea = document.forms["form"]["textArea"].value;
    var mailFormat = /\S+@\S+\.\S+/;
    var phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    if (firstName.length < 3) {
        alert("Vänligen ange ett korrekt namn!");
        return false;
    }
    if (lastName.length < 3) {
        alert("Vänligen ange ett korrekt namn!");
        return false;
    }


    if (!mailFormat.test(email)) {
        alert("Vänligen ange en korrekt e-postadress");
        return false;
    }

    if (!phoneFormat.test(phone)) {
        alert("Vänligen ange ett korrekt telefonnummer");
        return false;
    }

    if (textArea.length == 0) {
        alert("Vänligen skriv något om ditt ärende!")
        return false;
    }

    else {
        alert("Tack för att du kontaktar oss! Vi återkopplar så snart vi kan.");
        
    }
}
