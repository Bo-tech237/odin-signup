
const form = document.querySelector('form');
const submitSuccess = document.getElementById('submit-success');

const inputs = {
    fName: document.querySelector('#first-name'),
    lName: document.querySelector('#last-name'),
    email: document.querySelector('#email'),
    tel: document.querySelector('#tel'),
    password: document.querySelector('#password'),
    confirmPassword: document.querySelector('#confirmPassword')
  }
  
  const errorMessages = {
    fName: document.querySelector('#first-name-error'),
    lName: document.querySelector('#last-name-error'),
    email: document.querySelector('#email-error'),
    tel: document.querySelector('#tel-error'),
    password: document.querySelector('#password-error'),
    confirmPassword: document.querySelector('#confirmPassword-error')
  };

form.addEventListener('submit', (e) => {
    form.checkValidity();

    if (form.checkValidity()){
        submitSuccess.classList.remove('hidden');
    }

    if (!form.checkValidity()){
        submitSuccess.classList.add('hidden');
        e.preventDefault();
    }
});

for (let key in inputs){
    inputs[key].addEventListener('input', () => {
        if (inputs.password.value !== inputs.confirmPassword.value) {
            inputs.confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            inputs.confirmPassword.setCustomValidity('');
            errorMessages.confirmPassword.textContent = '';
        }

        if (inputs[key].value === ''){
            submitSuccess.classList.add('hidden');
        }

        errorMessages[key].textContent = '';
        inputs[key].checkValidity();

    });

    inputs[key].addEventListener('invalid', () => {
        errorMessages[key].textContent = inputs[key].validationMessage;
    });
}


