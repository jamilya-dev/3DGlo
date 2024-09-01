const forms = () => {
  const nameInputs = document.querySelectorAll('input[name=user_name]');
  const phoneInputs = document.querySelectorAll('input[name=user_phone]');
  const emailInputs = document.querySelectorAll('input[name=user_email]');
  const messageInputs = document.querySelector('input[name=user_message]');
  const calcInputs = document.querySelectorAll('.calc-block > input[type=text]');

  nameInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-я\s-]/gi, '');
    });
  });

  messageInputs.addEventListener('input', () => {
    messageInputs.value = messageInputs.value.replace(/[^а-я\s-]/gi, '');
  });

  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d\(\)\-]/, '');
    });
  });
  emailInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\w\@\-\_\.\!\~\*\']+/g, '');
    });
  });

  calcInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  });
};

export default forms;
