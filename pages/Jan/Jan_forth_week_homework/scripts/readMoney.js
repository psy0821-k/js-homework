const won = { 만: 10_000, 천: 1_000, 백: 100, 십: 10, 일: 1 };
let totalMoney = 21_312_834;
let result = '';

function moneyToString(currentMoney, wonType) {
  let currentMoneyResult = parseInt(parseInt(currentMoney) / parseInt(won[wonType]));
  if (wonType === '일') return currentMoneyResult;
  if (currentMoneyResult !== 0) return currentMoneyResult + wonType;
  return Number(0);
}

function moneyCalculater(calculaterMoney) {
  for (const type in won) {
    if (type === '만') continue;
    let money = moneyToString(calculaterMoney, type);
    calculaterMoney = calculaterMoney - parseInt(money) * parseInt(won[type]);
    result += money;
  }
}

function screenReaderMoneyTextTranslater(totalMoney) {
  let defaultMoney = totalMoney;
  let currentMoney = parseInt(defaultMoney / 10000);
  let calculaterMoney = defaultMoney - currentMoney * 10000;

  if (defaultMoney >= 10000) moneyCalculater(currentMoney);
  result = result + '만';
  moneyCalculater(calculaterMoney);

  return result;
}

console.log(screenReaderMoneyTextTranslater(totalMoney) + '원');
