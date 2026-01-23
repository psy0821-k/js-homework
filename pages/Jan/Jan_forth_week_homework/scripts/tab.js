const buttons = document.querySelector('.button');

buttons.addEventListener('click', () => {
  console.log('click');
  buttons.classList.add('active');
});
