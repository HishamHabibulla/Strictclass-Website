new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


function  sendValidation(){
    //alert("received");
    var nameInput = document.forms["sendNewsletterForm"]["nameInput"].value;
    var emailInput = document.forms["sendNewsletterForm"]["emailInput"].value;
    var textArea = document.forms["sendNewsletterForm"]["textArea"].value;
    var errorsExist = false;
    
      //NAME
      if (nameInput == "") {
        //nameValidationMsg
        document.getElementById("nameValidationMsg").style.display="";
        errorsExist = true;
      }
      else{
        document.getElementById("nameValidationMsg").style.display="none";
      }
      //Email 
      if (emailInput == "") {
        //nameValidationMsg
        document.getElementById("emailValidationMsg").style.display="";
        errorsExist = true;
      }
      else{
        document.getElementById("emailValidationMsg").style.display="none";
      }
      ////text Area
      if (textArea == "") {
        //nameValidationMsg
        document.getElementById("messageValidationMsg").style.display="";
        errorsExist = true;
      }
      else{
        document.getElementById("messageValidationMsg").style.display="none";
      }

    if(!errorsExist){
        alert("Thank you for applying for the newsletter, we will get back to you soon");
        document.forms["sendNewsletterForm"]["nameInput"].value = "";
        document.forms["sendNewsletterForm"]["emailInput"].value = "";
        document.forms["sendNewsletterForm"]["textArea"].value = "";
    }
    return false;
    }


   