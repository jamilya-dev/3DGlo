import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const windiwWidth = document.documentElement.clientWidth;

  const animation = () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = progress;
      },
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (windiwWidth > 768) {
        modal.style.display = 'block';
        modal.style.opacity = '0';
        animation();
      } else {
        modal.style.display = 'block';
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
