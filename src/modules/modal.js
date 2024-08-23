const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = modal.querySelector(".popup-close");
  const windiwWidth = document.documentElement.clientWidth;

  let opacity = 0;
  let intervalId;

  const animation = () => {
    opacity += 0.04;
    intervalId = requestAnimationFrame(animation);
    if (opacity < 1) {
      modal.style.opacity = opacity;
    } else {
      cancelAnimationFrame(intervalId);
      opacity = 0;
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (windiwWidth > 768) {
        modal.style.display = "block";
        modal.style.opacity = "0";
        animation();
      } else {
        modal.style.display = "block";
      }
    });
  });

  popupClose.addEventListener("click", () => {
    if (windiwWidth > 768) {
      modal.style.display = "none";
      modal.style.opacity = "";
    } else {
      modal.style.display = "none";
    }
  });
};

export default modal;
