/*

    Project 4
	Name: Manu Perron
	Date: 4/25/2023
	Description: Website Development & Deployment

*/

function validate(e) {
	
	hideErrors();

	if (formHasErrors()) {
		
		e.preventDefault();

		return false;
	}

	return true;
}

function resetForm(e) {
	
	if (confirm('Clear?')) {
		
		hideErrors();

		document.getElementById("fullname").focus();

		return true;
	}

	e.preventDefault();

	return false;
}

function formHasErrors() {

	let errorFlag = false;

    let requiredFields = ["fullname", "phone", "email", "proposal"];

	for(let i = 0; i < requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);
		if(textField.value == null || trim(textField.value) == ""){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			if(!errorFlag){
				textField.focus();
				textField.select();
			}
            errorFlag = true;
		}
	}

    const phoneRegExp = new RegExp(/^\d{10}$/);
    const phoneValue = document.getElementById("phone").value;

    if(!phoneRegExp.test(phoneValue) && !(document.getElementById("phone_error").style.display == "block")){
        document.getElementById("phoneformat_error").style.display = "block";
        if(!errorFlag || document.getElementById("phoneformat_error").style.display == "block"){
			document.getElementById("phone").focus();
			document.getElementById("phone").select();
		}
		errorFlag = true;
    }

    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	let emailValue = document.getElementById("email").value;

	if(!emailRegex.test(emailValue) && !(document.getElementById("email_error").style.display == "block")){
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag || document.getElementById("emailformat_error").style.display == "block"){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
		errorFlag = true;
	}

    return errorFlag;
}

function hideErrors() {

	let error = document.getElementsByClassName("error");

	
	for (let i = 0; i < error.length; i++) {
	
		error[i].style.display = "none";
	}
}

function trim(str) 
{
	return str.replace(/^\s+|\s+$/g,"");
}

function load() {

    document.getElementById("bidform").addEventListener("submit", validate);

	document.getElementById("bidform").addEventListener("reset", resetForm);

    hideErrors();
}

document.addEventListener("DOMContentLoaded", load);