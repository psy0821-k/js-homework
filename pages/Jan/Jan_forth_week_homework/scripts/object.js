const 성윤 = {
  accountInquiry: {
    title: '계좌 정보',
    items: [
      { number: '123-4546-789012', principal: 12345678 },
      { number: '123-4444-789012', principal: 1231238978 },
    ],
  },

  invest: {
    title: '투자 포트폴리오',
    items: [
      { stockNation: '국내주식', quantity: 10, price: 23456789, percentage: 5.2 },
      { stockNation: '해외주식', quantity: 5, price: 15234567, percentage: -2.1 },
      { stockNation: '펀드', quantity: 3, price: 8123456, percentage: 3.7 },
    ],
  },

  transactionHistory: {
    title: '최근 거래',
    items: [
      {
        date: '2026.01.22',
        description: '스타벅스 강남점',
        amount: -6_500,
      },
      {
        date: '2026.01.22',
        description: '급여 입금',
        amount: 3_500_000,
      },
      {
        date: '2026.01.21',
        description: '카카오페이 송금',
        amount: -50_000,
      },
      {
        date: '2026.01.21',
        description: 'GS25 편의점',
        amount: -12_300,
      },
      {
        date: '2026.01.20',
        description: '쿠팡 결제',
        amount: -89_000,
      },
    ],
  },

  card: {
    title: '보유 카드',
    items: [
      { cardName: '신한카드', cardNumber: '1234 5678 9012 3456', price: 1234560, kind: 'VISA' },
      { cardName: 'KB국민카드', cardNumber: '1234 5678 1234 3456', price: 567890, kind: 'Mastercard' },
    ],
  },
};