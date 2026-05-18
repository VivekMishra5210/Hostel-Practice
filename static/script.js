const timerElement = document.getElementById("timer");

let startTime = Date.now();

const timerInterval = setInterval(() => {

    const elapsed =
        ((Date.now() - startTime) / 1000).toFixed(2);

    timerElement.innerText = elapsed;

}, 10);

const form = document.getElementById("hostelForm");

const email = document.getElementById("email");
const mobile = document.getElementById("mobile");

const emailTick = document.getElementById("emailTick");
const mobileTick = document.getElementById("mobileTick");

email.addEventListener("input", () => {

    if(email.value.includes("@")){
        emailTick.style.display = "inline";
    }
    else{
        emailTick.style.display = "none";
    }

});

mobile.addEventListener("input", () => {

    if(mobile.value.length >= 10){
        mobileTick.style.display = "inline";
    }
    else{
        mobileTick.style.display = "none";
    }

});

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const popup1 = confirm(
        "You are proceeding without file. Press OK"
    );

    if(!popup1){
        return;
    }

    const popup2 = confirm(
        "Are you sure? Request for Hostel allotment will be initiated."
    );

    if(!popup2){
        return;
    }

    const formData = new FormData(form);

    const response = await fetch("/submit", {
        method:"POST",
        body:formData
    });

    const data = await response.json();

    if(data.success){

    clearInterval(timerInterval);

    const finalTime =
        ((Date.now() - startTime) / 1000).toFixed(2);

    document.body.innerHTML = `
        <div style="
            padding:30px;
            font-family:Arial;
        ">

            <div style="
                background:white;
                border-left:8px solid green;
                padding:20px;
                width:500px;
            ">

                <h2>Great!</h2>

                <p>${data.message}</p>

                <hr>

                <h3>
                    Time Taken: ${finalTime} seconds
                </h3>

            </div>

        </div>
    `;
}
    else{
        alert(data.message);
    }

});