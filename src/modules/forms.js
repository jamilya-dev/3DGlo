const forms = () => {
  const nameInputs = document.querySelectorAll('input[name=user_name]');
  const phoneInputs = document.querySelectorAll('input[name=user_email]');
  const emailInputs = document.querySelectorAll('input[name=user_phone]');
  const messageInputs = document.querySelector('input[name=user_message]');
  const calcInputs = document.querySelectorAll('.calc-block > input[type=text]');

  nameInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-я\s-]/gi, '');
      input.classList.add('success');
    });
  });

  messageInputs.addEventListener('input', () => {
    messageInputs.value = messageInputs.value.replace(/[^а-я\s-]/gi, '');
    input.classList.add('success');
  });

  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d\(\)\-]/, '');
      input.classList.add('success');
    });
  });
  emailInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\w\@\-\_\.\!\~\*\']+/g, '');
      input.classList.add('success');
    });
  });

  calcInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
      e.target.classList.add('success');
    });
  });
};

export default forms;
