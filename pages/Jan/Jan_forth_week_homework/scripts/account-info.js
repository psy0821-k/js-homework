
function inputAccoundCard(userName) {
  contentWrap.innerHTML = '';

  for (const key in userName.accountInquiry) {
    if (key === 'title') continue;
    
    userName.accountInquiry[key].forEach(el => {
      contentWrap.innerHTML += `
      <div class="account-info-content">
      <dl class="account-info-card">
      <dt class="account-title">계좌 정보</dt>
      <dd class="account-number" data-type="계좌번호">
      `+ el.number +`
      </dd>
      <dt class="sr-only">원금</dt>
      <dd class="principal" aria-label="`+ screenReaderMoneyTextTranslater(el.principal)  + `원" data-type="원금">
      `+  el.principal.toLocaleString() + `원
      </dd>
      </dl>
      </div>
      `;
    });
  }
}
