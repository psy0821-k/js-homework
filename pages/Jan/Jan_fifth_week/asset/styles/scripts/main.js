/**
 * 요구사항
 *
 * data-plan/ data-price 속성으로 js에서 올바르게 읽어왔는지
 */

const pricinPlan = {
  plans: [
    {
      title: 'basic',
      price: 0,
      features: ['기본 대시보드 제공', '월 10회 리포트', '커뮤니티 지원'],
    },
    {
      title: 'standard',
      price: 15000,
      features: ['모든 기능 무제한', '광고 제거', '이메일 고객 지원', '데이터 내보내기'],
    },
    {
      title: 'premium',
      price: 30000,
      features: ['Standard 혜택 전체', '전담 매니저 배정', 'API 액세스 권한', '초기 설정 컨설팅'],
    },
  ],
};

const pricingContainer = document.querySelector('.pricing-container');
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
      e.stopPropagation();
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
  selectionInfo.classList.add('show');
  if (card.dataset.plan === 'Basic') {
    selectionPlanName.textContent = card.dataset.plan;
    selectionPlanPrice.textContent = card.dataset.price;
  }
  if (card.dataset.plan === 'Standard') {
    selectionPlanName.textContent = card.dataset.plan;
    selectionPlanPrice.textContent = card.dataset.price;
  }
  if (card.dataset.plan === 'Premium') {
    selectionPlanName.textContent = card.dataset.plan;
    selectionPlanPrice.textContent = card.dataset.price;
  }
}
