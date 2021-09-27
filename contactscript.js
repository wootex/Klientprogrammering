// Körs när sidans DOM-träd har laddat klart
var complete = false;
$(document).ready(function () {


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


                    return;

                }



                if (temp === "") {
                    first.text("(Förnamn är tomt)");


                    return;

                }
                if (!nameFormat.test(temp)) {
                    console.log(first);
                    first.text("(Du kan inte ange siffror)");


                    return;
                }
                else {
                    first.text("");


                    complete = true;
                }

                break;


            case "lname":
                var last = $("#lastnameText");


                if (temp.length < 3) {
                    last.text("(Efternamn måste vara minst tre bokstäver)");


                    return;

                }


                if (temp === "") {
                    last.text("(Efternamn är tomt)");


                    return;
                }

                if (!nameFormat.test(temp)) {
                    last.text("(Du kan inte ange siffror)");


                }
                else {
                    last.text("");

                    
                    complete = true;
                }
                break;

            case "email":
                var email = $("#adressText");
                if (temp === "") {
                    email.text("E-post är tomt");


                    return;
                }

                if (!mailFormat.test(temp)) {

                    email.text("(Vänligen ange en korrekt e-postadress)");


                }
                else {
                    email.text("");


                    complete = true;
                }

                break;




            case "phone":
                var phoneText = $("#phoneText");
                if (temp === "") {

                    phoneText.text("(E-post är tomt)");
                    
                                        return;
                }
                if (!phoneFormat.test(temp)) {
                    phoneText.text("(Du har INTE bara siffror horunge)");
                    
                                    }
                break;

            case "textArea":
                var matterText = $("#matterText");
                if (temp === "") {

                    matterText.text("(Vänligen ange en beskrivning av ärendet)");
                 
                    return;
                }
                if (temp.length < 50) {

                    matterText.text("(Vänligen beskriv ärendet mer utförligt)");
                   
                    return;

                }

                else {
                    matterText.text("");

                    matterText.removeClass("wrong");
                    complete = true;


                    var button = $("#button");
                    if (complete === true) {
                        console.log("knapp ska synas");
                        button.addClass("submitButton");
                        button.removeClass("hideButton");



                    }

                    else {
                        console.log("knapp ska inte synas");
                        button.removeClass("submitButton");
                        button.addClass("hideButton");
                    }



                }
                break;



        }





    });

    //let $temp = $("#phone");
    //if ($temp.length) { 



}




);

// Validering av kontaktformulär
function validateForm() {

    if (complete) alert("Tack för att du kontaktar oss! Vi återkopplar så snart vi kan.");
    else alert("Något är inte ifyllt");







}



