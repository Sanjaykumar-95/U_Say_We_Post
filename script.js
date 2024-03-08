const form=document.querySelector('form');
const title=document.getElementById('title');
const quote=document.getElementById('quote');
const message=document.getElementById('msg');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "uniqcarts64@gmail.com",
        Password : "3BC8115C91CB1C4748D49763FA441E5946F5",
        To : 'uniqcarts64@gmail.com',
        From : "uniqcarts64@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});