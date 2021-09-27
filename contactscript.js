// Körs när sidans DOM-träd har laddat klart
$(document).ready(function () {

    $(".formInput").focusout(function (e) {
        var phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        var nameFormat = /^[a-zA-Z]+$/;
        var mailFormat = /\S+@\S+\.\S+/;


        var target = $(e.target);
        var temp = e.target.value;
        var id = target.attr("id");

        switch (id) {
            case "fname":
                var first =  $("#firstnameText");
                if (temp === "") {
                    first.text("(Förnamn är tomt)");
                    first.removeClass("ok");
                    first.addClass("wrong");
                    return;

                }
                if (!nameFormat.test(temp)) {
                    first.text("(Du kan inte ange siffror)");
                    first.removeClass("ok");
                    first.addClass("wrong");
                }
                else { first.text(""); 
                first.removeClass("ok");
                first.removeClass("wrong");
            }
                break;

            case "lname":
                var last =  $("#lastnameText");
                if (temp === "") {
                    last.text("(Efternamn är tomt)");
                    last.removeClass("ok");
                    last.addClass("wrong");
                    return;
                }

                if (!nameFormat.test(temp)) {
                    last.text("(Du kan inte ange siffror)");
                    last.removeClass("ok");
                    last.addClass("wrong");
                }
                else { last.text(""); 
                last.removeClass("ok");
                last.removeClass("wrong");
            }
                break;

            case "email":
                if (temp === "") {
                    console.log("E-post är tomt");
                    return;
                }

                if (!mailFormat.test(temp)) {
                    console.log("Vänligen ange en korrekt e-postadress");
                }
                break;

            case "phone":
                if (temp === "") {
                    console.log("Telefonnummer är tomt");
                    return;
                }
                if (!phoneFormat.test(temp)) {
                    console.log("Du har INTE bara siffror horunge");
                }
                break;

            case "textArea":
                if (temp === "") {
                    console.log("Vänligen ange en beskrivning av ärendet");
                    return;
                }
                if (temp.length < 50) {
                    console.log("Vänligen beskriv ärendet mer utförligt");
                }
        }





    });

    //let $temp = $("#phone");
    //if ($temp.length) { 



}




);

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



