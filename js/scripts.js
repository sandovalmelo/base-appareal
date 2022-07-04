const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}

	return false;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const isEmailValid = validateEmail(emailInput.value);

	if (!isEmailValid) {
		errorIcon.style.display = "block";
		errorMessage.style.display = "block";

		setTimeout(() => {
			errorIcon.style.display = "none";
			errorMessage.style.display = "none";
		}, 5000);
	}

	console.log("valid email");
});
