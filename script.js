const form2 = document.getElementById('form2');
const title2 = document.getElementById('title2');
const quote2 = document.getElementById('quote2');
const message2 = document.getElementById('msg2');

function Post_sendEmail() {
    const bodyMessage = `Title: ${title2.value} <br> Quote:  ${quote2.value} <br> Message:  ${message2.value};`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "uniqcarts64@gmail.com",
        Password: "3BC8115C91CB1C4748D49763FA441E5946F5",
        To: 'uniqcarts64@gmail.com',
        From: "uniqcarts64@gmail.com",
        Subject: "Post Mail",
        Body: bodyMessage
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!, Will update within 24hrs",
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

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    Post_sendEmail();

    setTimeout(() => {
        location.reload();
    }, 3000);

});