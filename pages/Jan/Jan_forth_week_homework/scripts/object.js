const accountInquiry = {
  title: '계좌 정보',
  account: {
    accountNumber: ['123-4546-789012', '123-4546-789012'],
    price: [12345678, 12345678],
  },
};

const invest = {
  title: '투자 포트폴리오',
  '국내 주식': {
    quantity: 10,
    price: 23456789,
    persentage: 5.2,
  },
  '해외 주식': {
    quantity: 5,
    price: 15234567,
    persentage: -2.1,
  },
  펀드: {
    quantity: 3,
    price: 8123456,
    persentage: 3.7,
  },
};

const transactionHistory = {
  title: '최근 거래',
  date: {
    '2026.01.22': {
      priceInfo: ['급여 입금', '스타벅스 강남점'],
      price: [3_500_000, -6500],
    },
    '2026.01.21': {
      priceInfo: ['카카오페이 송금', 'GS25 편의점'],
      price: [-50000, -12300],
    },
    '2026.01.20': {
      priceInfo: ['쿠팡 결제'],
      price: [-89000],
    },
  },
};

const card = {
  name: ['신한카드', 'KB국민카드'],
  cardNumber: {
    first: [1234, 5678, 9012, 3456],
    second: [1234, 5678, 9012, 3456],
  },
  price: [1234560, 567890],
  kind: ['VISA', 'Mastercard'],
};
