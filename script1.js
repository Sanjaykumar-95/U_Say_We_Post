const form1 = document.getElementById('form1');
const title1 = document.getElementById('title1');
const quote1 = document.getElementById('quote1');
const message1 = document.getElementById('msg1');
const date1 = document.getElementById('date1');

function Contact_sendEmail() {
    const bodyMessage = `Title: ${title1.value} <br> Quote:  ${quote1.value} <br> Message:  ${message1.value}; <br> Date : ${date1.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "uniqcarts64@gmail.com",
        Password: "3BC8115C91CB1C4748D49763FA441E5946F5",
        To: 'uniqcarts64@gmail.com',
        From: "uniqcarts64@gmail.com",
        Subject: "Contact Mail",
        Body: bodyMessage
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Thanks for contacting us, We will get back to you soon!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send message. Please try again later.",
                    icon: "error"
                });
            }
        }
    );
}

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    Contact_sendEmail();

    setTimeout(() => {
        location.reload();
    }, 3000);
});