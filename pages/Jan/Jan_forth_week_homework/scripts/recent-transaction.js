
function inputTransactionHistory(userName) {
  contentWrap.innerHTML = '';

  
  for (const key in userName.transactionHistory) {
    if (key === 'title') continue;
    
    userName.transactionHistory[key].forEach(el => {
      const setColor = el.amount > 0 ? "#055FEA":"#D4392C"


      contentWrap.innerHTML +=
        `
        <div class="recent-transaction-card">
          <dl>
            <dt class="sr-only">날짜</dt>
            <dd class="recent-date" data-type="날짜"> ` +
        el.date +
        `</dd>
            <dt class="sr-only">사용처</dt>
            <dd class="recent-used-place" data-type="사용처">` +
        el.description +
        `</dd>
          </dl>

          <dt class="sr-only">금액</dt>
          <dd class="recent-principal" style="color:${setColor}" data-type="금액">` +
        el.amount +
        `원</dd>
        </div>
      `;
    });
  }
}
