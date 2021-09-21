// Körs när sidans DOM-träd har laddat klart
$(document).ready(function() {


    // Script för drop down från meny-ikon, visar och döljer med animering
    $("#menuIcon").on("click", function () {
        var dropdown = $("#wrapperDropdown");

        if (dropdown.attr("class") === "hidden") {
            $("#menuIcon").addClass("open");
            dropdown.removeClass("hidden");

            dropdown.animate({
                height: "100%"
            }, 150, function () {
                dropdown.addClass("show");
            });
        }
        else {
            dropdown.animate({
                height: "0%"
            }, 150, function () {
                dropdown.addClass("hidden").removeClass("show");
            });

            $("#menuIcon").removeClass("open");
        }
        
    });

});

// Validering av kontaktformulär
function validateForm() {
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone"].value;
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

}
