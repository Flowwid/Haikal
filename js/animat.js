const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (cardTop < window.innerHeight && cardBottom > 0) {
        console.log('adding fade-in class');
        card.classList.add('fade-in');
        card.classList.remove('fade-out');
      } else {
        console.log('adding fade-out class');
        card.classList.add('fade-out');
        card.classList.remove('fade-in');
      }
  });
});