document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".styled__CardWrapperweb-sc-tcm90z-22.GuTED");
  const leftBtn = document.querySelector(".styled__LeftArrowButton-sc-tcm90z-40.lbbONx");
  const rightBtn = document.querySelector(".styled__RightArrowButton-sc-tcm90z-39.eMGjXs");

  if (!container || !leftBtn || !rightBtn) {
    return;
  }

  const card = container.querySelector(".styled__ContentContainerweb-sc-tcm90z-24.bMgedU");
  if (!card) {
    return;
  }

  const scrollAmount = card.offsetWidth + 16; // 카드 너비 + 간격 고려

  rightBtn.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
});
