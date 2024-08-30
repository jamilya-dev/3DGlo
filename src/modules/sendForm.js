const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';

  // валидация заполнения полей формы
  const validate = (list) => {
    let success = true; // изначально присваиваем true
    list.forEach((input) => {
      if (input.classList.contains('success')) {
        // если нет у хотябы одного инпута класса success
        success = false; // присваиваем false
      }
    });
    return success; // возвращаем success
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());
  };
  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    // устанавливаем слово загрузка при клике
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      console.log(element);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });
    console.log();
    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          // меняем загрузка на успех
          statusBlock.textContent = successText;
          // очищаем инруты после отправки
          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны!!!');
    }
  };
  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста!!!');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
