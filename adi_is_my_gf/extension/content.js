chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

    if(request.action === "fillForm"){

        // hostel select
        const hostelDropdown =
            document.getElementById("pref_1");

        if(hostelDropdown){

            hostelDropdown.value = "2000008";

            hostelDropdown.dispatchEvent(
                new Event("change", { bubbles:true })
            );
        }

        // room select
        const roomDropdown =
            document.getElementById(
                "hostelapplication-room_type_preference"
            );

        if(roomDropdown){

            roomDropdown.value = "2-Seater";

            roomDropdown.dispatchEvent(
                new Event("change", { bubbles:true })
            );
        }

        // anme
        const nameField =
            document.getElementById(
                "emergency_contact_details"
            );

        if(nameField){

            nameField.value =
                "hehe boi 1";

            nameField.dispatchEvent(
                new Event("input", { bubbles:true })
            );
        }

        // email
        const emailField =
            document.getElementById(
                "emergency_contact_email"
            );

        if(emailField){

            emailField.value =
                "hehe boi 2";

            emailField.dispatchEvent(
                new Event("input", { bubbles:true })
            );
        }

        // mobile
        const mobileField =
            document.getElementById(
                "emergency_contact_mobile"
            );

        if(mobileField){

            mobileField.value =
                "hehe boi 3";

            mobileField.dispatchEvent(
                new Event("input", { bubbles:true })
            );
        }

        // checkbox
        const checkbox =
            document.getElementById(
                "terms_checkbox"
            );

        if(checkbox){

            checkbox.checked = true;

            checkbox.dispatchEvent(
                new Event("change", { bubbles:true })
            );
        }

        // console.log("Hehe boi!.");

    }

});
