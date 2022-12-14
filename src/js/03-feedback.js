import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const infoInStorage = localStorage.getItem('feedback-form-state');
const infoAboutForm = {};

const onLocalInfo = () => {
  if (infoInStorage) {
    const valuesInStorage = JSON.parse(infoInStorage);
    form.email.value = valuesInStorage.email;
    form.message.value = valuesInStorage.message;
  }
};
onLocalInfo();

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
