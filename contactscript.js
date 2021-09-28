// Körs när sidans DOM-träd har laddat klart

$(document).ready(function () {
    complete1 = false;
    complete2 = false;
    complete3 = false;
    complete4 = false;
    complete5 = false;

    $(".formInput").focusout(function (e) {
        var phoneFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        var nameFormat = /^[a-öA-Ö]+$/;
        var mailFormat = /\S+@\S+\.\S+/;

        var target = $(e.target);
        var temp = e.target.value;
        var id = target.attr("id");

        switch (id) {
            case "fname":
                var first = $("#firstnameText");


                if (temp.length < 3) {
                    first.text("(Förnamn måste vara minst tre bokstäver)");
                    complete1 = false;

                }

                else if (temp === "") {
                    first.text("(Förnamn är tomt)");
                    complete1 = false;
                }
                else if (!nameFormat.test(temp)) {
                    console.log(first);
                    first.text("(Du kan inte ange siffror)");
                    complete1 = false;
                }
                else {
                    first.text("");
                    complete1 = true;
                }

                break;


            case "lname":
                var last = $("#lastnameText");


                if (temp.length < 3) {
                    last.text("(Efternamn måste vara minst tre bokstäver)");
                    complete2 = false;
                }


                else if (temp === "") {
                    last.text("(Efternamn är tomt)");
                    complete2 = false;
                }

                else if (!nameFormat.test(temp)) {
                    last.text("(Du kan inte ange siffror)");
                    complete2 = false;
                }
                else {
                    last.text("");
                    complete2 = true;
                }
                break;

            case "email":
                var email = $("#adressText");
                if (temp === "") {
                    email.text("E-post är tomt");
                    complete3 = false;
                }
                else if (!mailFormat.test(temp)) {

                    email.text("(Vänligen ange en korrekt e-postadress)");
                    complete3 = false;
                }
                else {
                    email.text("");


                    complete3 = true;
                }
                break;

            case "phone":
                var phoneText = $("#phoneText");
                if (temp === "") {

                    phoneText.text("(Telefon är tomt)");
                    complete4 = false;
                }
                else if (!phoneFormat.test(temp)) {
                    phoneText.text("(Du kan endast enge siffror.)");
                    complete4 = false;
                }
                else {
                    phoneText.text("")
                    complete4 = true;
                }
                break;

            case "textArea":
                var matterText = $("#matterText");
                if (temp === "") {
                    matterText.text("(Vänligen ange en beskrivning av ärendet)");
                    complete5 = false;
                }
                if (temp.length < 50) {

                    matterText.text("(Vänligen beskriv ärendet mer utförligt)");
                    complete5 = false;


                }

                else {
                    matterText.text("");
                    matterText.removeClass("wrong");
                    complete5 = true;
                }

                var button = $("#button");
                if (complete1 && complete2 && complete3 && complete4 && complete5) {
                    console.log("knapp ska synas");

                }

                else {
                    console.log("knapp ska inte synas");

                }


        }

    });

    $("#button").on("click", function (event) {


        if ((complete1) && (complete2) && (complete3) && (complete4) && (complete5)) { alert("Tack för att du kontaktar oss! Vi återkopplar så snart vi kan."); }
        else {
            event.preventDefault();
            alert("Något är inte ifyllt");
        }

    }


    );

}

);

// Validering av kontaktformulär
function validateForm() {
    console.log(complete1 + complete2);
    if (complete1 && complete2 && complete3 && complete4 && complete5) { alert("Tack för att du kontaktar oss! Vi återkopplar så snart vi kan."); }
    else { alert("Något är inte ifyllt"); }
}



