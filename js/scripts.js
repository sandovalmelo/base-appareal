const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const feedBack = document.querySelector(".feedback-message");
const submitButton = document.querySelector(".submit-btn");

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
		feedBack.innerText = "Please provide a valid email";
		feedBack.style.display = "block";
		submitButton.disabled = true;

		setTimeout(() => {
			errorIcon.style.display = "none";
			feedBack.style.display = "none";
			feedBack.innerContent = "";
			submitButton.disabled = false;
		}, 2000);

		emailInput.focus();

		return;
	}

	feedBack.innerText = "Your subscription has been confirmed";
	feedBack.style.display = "block";
	feedBack.classList.add("success");
	emailInput.value = "";

	setTimeout(() => {
		feedBack.style.display = "none";
		feedBack.innerContent = "";
		feedBack.classList.remove("success");
	}, 2000);
});
