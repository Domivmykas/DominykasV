const buttons = document.querySelectorAll('.animated-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.animation = 'scale 0.5s ease';
    setTimeout(() => {
      button.style.animation = '';
    }, 500);
  });
});
