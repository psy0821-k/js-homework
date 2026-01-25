const cardCard = document.querySelector('.card-card')

function inputCard(userName) {
  
  contentWrap.innerHTML = '';
  
  for (const key in userName.card) {
    if (key === 'title') continue;
    
    userName.card[key].forEach(el => {
        const cardColor = el.kind === "VISA"? `#727F8E`: `#055FEA`;
      contentWrap.innerHTML += `
         <div class="card-card" style="background-color: ${cardColor}">
        <dl>
          <dt class="sr-only">카드이름</dt>
          <dd class="card-name" data-type="카드 이름">`+el.cardName+`</dd>
          <dt class="sr-only">카드 넘버</dt>
          <dd class="card-number" data-type="카드 넘버">` + el.cardNumber +`</dd>
          <dt class="card-price-title">이번 달 사용액</dt>
          <dd class="card-price" aria-label="`+ screenReaderMoneyTextTranslater(el.price)  + `원" data-type="이번 달 사용액"> + `+el.price+ `원</dd>
        </dl>

        <dl>
          <dt class="sr-only">카드 종류</dt>
          <dd class="card-kind" data-type="카드 종류">`+el.kind+`</dd>
        </dl>
      </div>
      `;
    });
  }
}
