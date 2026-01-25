const tabHeader = document.getElementById('tab-header');
const buttons = document.querySelectorAll('button');

const tabContentContainer = document.querySelector('.tab-content-container');
const tabContentTitle = tabContentContainer.querySelector('.tab-content-title');
for (const button of buttons) {
  button.addEventListener('click', () => {
    resetButton();
    button.classList.add('active');
    tabContentTitle.textContent = button.dataset.title;
    console.log(button.dataset.title);
  });
}

function resetButton() {
  for (const button of buttons) {
    button.classList.remove('active');
  }
}
