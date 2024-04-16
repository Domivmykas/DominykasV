function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
  }

  const button = document.getElementById('animatedButton');

button.addEventListener('click', () => {
  button.style.animation = 'scale 0.5s ease';
  setTimeout(() => {
    button.style.animation = '';
  }, 500);
});
