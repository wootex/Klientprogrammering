// Validering av kontaktformulär
function validateForm() {
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
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
    // if (!email.value.match(mailFormat)){
    //     alert("email skit");
    //     return false;
    // }
    // // if (!phoneFormat.value.match(phoneFormat)){
    // //     alert("telefonnummer funkar");
    // //     return true;
    // // }
    // // if (mailFormat.test(email.value)) {
    // //     alert("email skit");
    // //     return false;
    // // }
}

// Körs när sidans DOM-träd har laddat klart
$(document).ready(function () {


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

    /* automatic slideshow (ska göras om till JQ och metoden .each() )*/
    var slideIndex = 0;
    nextPic();
    function nextPic() {
        var i;
        var x = document.getElementsByClassName("slidePic");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(nextPic, 2500);
    }
    /* -------------------------------------- */


});