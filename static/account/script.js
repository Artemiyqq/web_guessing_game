const signUpButton = document.getElementById('sign-up');
const signInButton = document.getElementById('sign-in');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const inputField = document.getElementById("sign-up-username");
const passwordField = document.getElementById("sign-up-password");
const repeatPasswordField = document.getElementById("sign-up-repeat-password");


inputField.addEventListener("input", checkInput);
passwordField.addEventListener("input", checkInput);
repeatPasswordField.addEventListener("input", checkInput);

function checkInput(){
	const prohibitedChars = /[!@#$%^&*() +\-=\[\]{};':"\\|,.<>\/?]/g;
	const inputValue = this.value;

	if (prohibitedChars.test(inputValue)) {
	this.value = inputValue.replace(prohibitedChars, '');
	}
};

const passwordToggleImg = document.getElementById('sign-up-password-toggle')
const repeatPasswordToggle = document.getElementById('sign-up-repeat-password-toggle')
const signInToggle = document.getElementById('sing-in-toggle')

passwordToggleImg.addEventListener('click', function(){
	togglePasswordVisibility(document.getElementById('sign-up-password'))})
repeatPasswordToggle.addEventListener('click', function(){
	togglePasswordVisibility(document.getElementById('sign-up-repeat-password'))})
signInToggle.addEventListener('click', function(){
		togglePasswordVisibility(document.getElementById('sing-in-password'))})	

function togglePasswordVisibility(inputElement) {
	const currentType = inputElement.getAttribute('type');
  	const newType = currentType === 'password' ? 'text' : 'password';
  	inputElement.setAttribute('type', newType);
}
