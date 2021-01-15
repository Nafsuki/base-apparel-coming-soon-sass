const form = document.getElementById('form');
const email = document.getElementById('email');
const small = form.querySelector('small');

// Show input error message
const showError = (input, message) => {
  form.classList.add('error');
  small.innerText = message;
}

// Show success outline
const showSuccess = (input, message) => {
  form.classList.add('success');
  small.innerText = message;
}

// Check email is valid 
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault();
  
  if (email.value === '') {
    showError(email, 'E-mail is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email, 'Submission completed!');
  }
})