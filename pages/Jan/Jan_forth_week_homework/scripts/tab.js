const tabHeader = document.getElementById('tab-header');
const buttons = document.querySelectorAll('button');
const tabContentContainer = document.querySelector('.tab-content-container');
const tabContentTitle = tabContentContainer.querySelector('.tab-content-title');
const contentWrap = document.querySelector('.content-wrap');

function resetButton() {
  for (const button of buttons) {
    button.classList.remove('active');
  }
}

function insertContent(userName) {
  inputAccoundCard(userName);
  for (const button of buttons) {
    button.addEventListener('click', () => {
      if (button.dataset.title === userName.accountInquiry.title) {
        resetButton();
        tabContentTitle.textContent = button.dataset.title;
        button.classList.add('active');
        inputAccoundCard(userName);
      }

      if (button.dataset.title === userName.invest.title) {
        resetButton();
        tabContentTitle.textContent = button.dataset.title;
        button.classList.add('active');
        inputInvest(userName)
      }

      if (button.dataset.title === userName.transactionHistory.title) {
        resetButton();
        tabContentTitle.textContent = button.dataset.title;
        button.classList.add('active');
        inputTransactionHistory(userName);
      }

      if (button.dataset.title === userName.card.title) {
        resetButton();
        tabContentTitle.textContent = button.dataset.title;
        button.classList.add('active');
        inputCard(userName);
      }
    });
  }
}

insertContent(성윤);
