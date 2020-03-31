function sendMail(contactForm){
    emailjs.send("gmail","my_resume_contact",{
        
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "request_contact":contactForm.projectSummary.value
    })
    .then(function(response){
        console.log("SUCCESS", response);
    },
    function(error){
            console.log("FAILED",error);
    });
    return false;
}