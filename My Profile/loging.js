const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {
    const bodyMessage =` Name: ${name.value}<br> Email:  ${email.value}<br>  subject:
     ${subject.value}<br> message:  ${message.value}<br>`;
    Email.send({
        SecureToken:"f61d5eb5-1f81-449f-b0a6-45b1b1736c31",
        To : 'yashwanthkrishna193@gmail.com',
        From : "yahawanthkrishna70@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title:"Good Job",
                text:"you the button",
                icon:"success"
            });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement .classList.add("error");
        }

          if (items[1].value != "") {
            checkEmail();
    
          }

          items[1].addEventListener("keyup", () => {
            checkEmail();
          })

        item.addEventListener("keyup", () => {
            if (item.value!= "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else
            {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if (!emailRegex.test(email.value)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!name.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }
   // sendEmail();
});


