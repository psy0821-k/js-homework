const tabHeader = document.getElementById('tab-header');
const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    resetButton();
    button.classList.add('active');
  });
}

function resetButton() {
  for (const button of buttons) {
    button.classList.remove('active');
  }
}
