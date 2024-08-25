const menu = () => {
  const menu = document.querySelector('menu');
  const mainHeader = document.querySelector('.main-header');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  mainHeader.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu();
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('.menu') || e.target.matches('ul>li>a') || e.target.classList.contains('close-btn')) {
      handleMenu();
    }
  });

  // дополнительное работает все на одном прослушивателе

  // const toggleMenu = () => {
  //   window.addEventListener('click', (e) => {
  //     if (
  //       e.target.closest('.menu') ||
  //       e.target.matches('.active-menu>ul>li>a') ||
  //       e.target.classList.contains('close-btn') ||
  //       (!menu.contains(e.target) && menu.classList.contains('active-menu'))
  //     ) {
  //       handleMenu();
  //     }
  //   });
  // };
  // toggleMenu();
};

export default menu;
