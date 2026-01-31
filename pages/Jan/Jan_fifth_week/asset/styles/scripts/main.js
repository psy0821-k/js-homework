const pricingPlans = {
  plans: [
    {
      title: 'Basic',
      price: 0,
      features: ['기본 대시보드 제공', '월 10회 리포트', '커뮤니티 지원'],
    },
    {
      title: 'Standard',
      price: 15000,
      features: ['모든 기능 무제한', '광고 제거', '이메일 고객 지원', '데이터 내보내기'],
    },
    {
      title: 'Premium',
      price: 30000,
      features: ['Standard 혜택 전체', '전담 매니저 배정', 'API 액세스 권한', '초기 설정 컨설팅'],
    },
  ],
};

const pricingContainer = document.querySelector('.pricing-container');
const plansInfo = pricingPlans.plans;

plansInfo.forEach(plan => {
  let featuresHTML = '';
  plan.features.forEach(feature => {
    featuresHTML += `<li>${feature}</li>`;
  });

  pricingContainer.innerHTML += `
    <article class="plan-card" data-plan="${plan.title}" data-price="${plan.price}"">
    <span class="check-badge" aria-hidden="true">✔</span>
    <h3 class="plan-name" lang="en">${plan.title}</h3>
    <p class="plan-price" aria-label="가격: ${plan.price > 0 ? plan.price : '무료'}">${plan.price > 0 ? '₩' + plan.price.toLocaleString() : 'Free'}</p>
    <ul class="plan-features">
    ${featuresHTML}
    </ul>
    <button type="button" class="plan-selection-button" aria-label="${plan.title} 플랜 선택하기" aria-pressed="false"></button>
  </article>
  `;
});

const planCards = pricingContainer.querySelectorAll('.plan-card');
const selectionInfo = document.querySelector('.selection-info');
const selectionPlanName = selectionInfo.querySelector('.highlight');
const selectionPlanPrice = selectionInfo.querySelector('[data-id="plan-price"]');
planCards.forEach(planCard => {
  console.log(planCard);
  planCard.addEventListener('click', e => {
    const card = e.target.closest('.plan-card');

    if (card) {
      removeSelecte();
      e.preventDefault();
      card.classList.add('selected');
      card.setAttribute('aria-pressed', 'true');
      showSelectionInfo(card);
    }
  });
});

function removeSelecte() {
  planCards.forEach(planCard => {
    planCard.classList.remove('selected');
    planCard.setAttribute('aria-pressed', 'false');
    selectionInfo.classList.remove('show');
  });
}

function showSelectionInfo(card) {
  plansInfo.forEach(plan => {
    selectionInfo.classList.add('show');
    if (card.dataset.plan === plan.title && parseInt(card.dataset.price) === plan.price) {
      const price = card.dataset.price;
      selectionPlanName.textContent = card.dataset.plan;
      selectionPlanPrice.textContent = price > 0 ? plan.price.toLocaleString() + '원' : '무료';
    }
  });
}
