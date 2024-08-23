const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = modal.querySelector(".popup-close");
  const windiwWidth = document.documentElement.clientWidth;

  let count = 0;
  let intervalId;

  const animation = () => {
    count++;
    intervalId = requestAnimationFrame(animation);
    if (count <= 50) {
      let opacity = Number(modal.style.opacity);
      opacity += 0.02;
      modal.style.opacity = opacity;
    } else {
      cancelAnimationFrame(intervalId);
      count = 0;
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (windiwWidth > 768) {
        modal.style.display = "block";
        modal.style.opacity = "0";
        animation();
      }
    });
  });

  popupClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.opacity = "0";
  });
};

export default modal;
