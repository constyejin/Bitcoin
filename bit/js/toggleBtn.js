document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.styled__Card-sc-1tumccw-0');

  cards.forEach(card => {
    const toggleBtn = card.querySelector('[class*="DropdownButton-sc-1tumccw-"]');
    const features = card.querySelector('.styled__FeaturesCard-sc-1tumccw-22');

    if (!toggleBtn || !features) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = features.classList.contains('jwpdnS');

      if (isOpen) {
        features.classList.remove('jwpdnS');
        features.classList.add('ibIIsk');
        toggleBtn.style.transform = 'rotate(0deg)';
      } else {
        features.classList.remove('ibIIsk');
        features.classList.add('jwpdnS');
        toggleBtn.style.transform = 'rotate(180deg)';
      }
    });
  });
});
