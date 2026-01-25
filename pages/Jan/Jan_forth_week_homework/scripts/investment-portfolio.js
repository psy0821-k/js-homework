function inputInvest(userName) {
  contentWrap.innerHTML = '';

  for (const key in userName.invest) {
    if (key === 'title') continue;

    userName.invest[key].forEach(el => {

      const quantityText =
        el.stockNation === '펀드'
          ? `${el.quantity}개 상품`
          : `${el.quantity}종목 보유`;

      const percentText =
        el.percentage > 0
          ? `+${el.percentage}%`
          : `${el.percentage}%`;

        const percentTextColor =
        el.percentage < 0
          ? `#D4392C`
          : `#49B36E`;


      const percentClass =
        el.percentage > 0 ? 'is-plus' : el.percentage < 0 ? 'is-minus' : '';

      contentWrap.innerHTML += `
        <div class="investment-portfolio-card">
          <dl>
            <dt class="sr-only">주식</dt>
            <dd class="investment-portfolio-nation" data-type="주식">
              ${el.stockNation}
            </dd>

            <dt class="sr-only">보유 수</dt>
            <dd class="investment-portfolio-stock-quantity" data-type="주식 보유 수">
              ${quantityText}
            </dd>
          </dl>

          <dl>
            <dt class="sr-only">금액</dt>
            <dd class="investment-portfolio-principal" aria-label=`+screenReaderMoneyTextTranslater(el.price) +` data-type="금액">
              ${el.price}원
            </dd>

            <dt class="sr-only">증감 퍼센트</dt>
            <dd class="investment-portfolio-percent ${percentClass}" style="color:${percentTextColor}" data-type="퍼센트">
              ${percentText}
            </dd>
          </dl>
        </div>
      `;
    });
  }
}
