const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = modal.querySelector(".popup-close");
  const windiwWidth = document.documentElement.clientWidth;
  console.log(document.documentElement.clientWidth);

  if (windiwWidth > 768) {
    modal.style.opacity = "0";
    modal.style.transition = "opacity 1s";
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (windiwWidth > 768) {
        requestAnimationFrame(() => {
          modal.style.opacity = "1";
        });
      }
    });
  });

  popupClose.addEventListener("click", () => {
    if (windiwWidth > 768) {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    } else {
      modal.style.display = "none";
    }
  });
};

export default modal;
