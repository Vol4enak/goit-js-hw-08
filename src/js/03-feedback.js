import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const infoInStorage = localStorage.getItem('feedback-form-state');
const valuesInStorage = JSON.parse(infoInStorage);

const infoAboutForm = {
  email: '',
  message: '',
};

const onLocalInfo = (repairForm) => {
  if (infoInStorage) {
    form.email.value = repairForm.email;
    form.message.value = repairForm.message;
    infoAboutForm.email = repairForm.email;
    infoAboutForm.message = repairForm.message;

  }
};
onLocalInfo(valuesInStorage);

const formChecker = evt => {
  evt.preventDefault();

  infoAboutForm[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(infoAboutForm));
};

const formSubmit = evt => {
  evt.preventDefault();
  console.log(infoAboutForm);
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', throttle(formChecker, 500));
form.addEventListener('submit', formSubmit);
