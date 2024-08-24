const forms = () => {
  const form1Name = document.getElementById('form1-name');
  const form1Email = document.getElementById('form1-email');
  const form1Phone = document.getElementById('form1-phone');
  const form1 = document.getElementById('form1');
  const form2Name = document.getElementById('form2-name');
  const form2Email = document.getElementById('form2-email');
  const form2Message = document.getElementById('form2-message');
  const form2Phone = document.getElementById('form2-phone');
  const form2 = document.getElementById('form2');
  const form3Name = document.getElementById('form3-name');
  const form3Email = document.getElementById('form3-email');
  const form3Phone = document.getElementById('form3-phone');
  const form3 = document.getElementById('form3');

  const calcInputs = document.querySelectorAll('.calc-block > input[type=text]');

  const checkInputsText = (input, form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!/[а-я]+\s+-+/gi.test(input.value) && input.value !== '') {
        console.log('Заполните корректно поле');
      } else {
        console.log('Данные отправлены');
      }
    });
  };

  const checkInputsPhone = (input, form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (/^[\d\(\)\-]+$/.test(input.value) && input.value !== '') {
        console.log('Заполните корректно поле');
      } else {
        console.log('Данные отправлены');
      }
    });
  };

  const checkInputsEmail = (input, form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!/[\w\@\-\_\.\!\~\*\']+/g.test(input.value) && input.value !== '') {
        console.log('Заполните корректно поле');
      } else {
        console.log('Данные отправлены');
      }
    });
  };

  calcInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  });

  checkInputsText(form1Name, form1);
  checkInputsEmail(form1Email, form1);
  checkInputsPhone(form1Phone, form1);
  checkInputsText(form2Name, form2);
  checkInputsText(form2Message, form2);
  checkInputsEmail(form2Email, form2);
  checkInputsPhone(form2Phone, form2);
  checkInputsEmail(form3Email, form3);
  checkInputsText(form3Name, form3);
  checkInputsPhone(form3Phone, form3);
};

export default forms;
