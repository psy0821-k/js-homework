function userRankScoreToRank (userScore){
  if ( 85 <= parseFloat(userScore)){ return "vip"; }
  if ( 70 <= parseFloat(userScore)){ return "silver"; }
  if ( parseInt(userScore) === 0){ return "사용자만 확인이 가능합니다.가입부터 해주세요";}
  return "nomalUser";
}

function createUser(name, score) {
  return {
    userName: name,
    userScore: score + 10,
    userRank: userRankScoreToRank(score),
  };
}

const ironMan = createUser("아이언맨", 100);
const batman = createUser("배트맨", 70.78);
const spiderMan = createUser("스파이더맨", 10);
const guest = createUser();

console.log(ironMan.userName);
console.log(batman.userScore);
console.log(spiderMan.userRank);
console.log(guest);

console.log("--------------------------------------------------------------")

// 클린코드에는 정답이 없지만 else if 문을 쓰는것 보다 if문을 쓰는게 
// 만약 else if문이 많아지면 switch case문을 사용하는 것이 더 명시적이라는 영상을 보았습니다.
// 선생님의 의견이 궁급합니다.

function userWelcomeMessage (userName, userRank){
  if( userRank === "vip"){ return "🌟 VIP " + userName + "님, 특별한 혜택이 준비되어 있습니다!" + typeof(userName); }
  if( userName === undefined){return "비정상적인 접근방식 입니다"}
  return "안녕하세요, " + userName + "님! 즐거운 쇼핑 되세요." + typeof(userName);
}

console.log(userWelcomeMessage(ironMan.userName, ironMan.userRank));
console.log(userWelcomeMessage(batman.userName, batman.userRank));
console.log(userWelcomeMessage(spiderMan.userName, spiderMan.userRank));
console.log(userWelcomeMessage(guest.userName, guest.userRank));

console.log("==========================================================");

function deliveryFee(orderAmount, delverLocation){
  const DEFAULT_DELEVRY_FEE = 3000;
  let deliveryFee = DEFAULT_DELEVRY_FEE;
  if( 50_000 <= parseInt(orderAmount) || parseInt(orderAmount) <= 0 ){ deliveryFee =  0; }
  if(delverLocation === "제주" || delverLocation === "도서"){ deliveryFee +=  3000; }

  return "회원님의 배송비는 : " + deliveryFee + "원 입니다." + typeof(deliveryFee);
}

console.log(deliveryFee("50000","서울"));
console.log(deliveryFee("50000","제주"));
console.log(deliveryFee("10000","서울"));
console.log(deliveryFee("10000","제주"));
console.log(deliveryFee("0","서울"));
console.log(deliveryFee("0","제주"));

console.log("==========================================================");

const passwordValidation = (password) => {
  return 20 >= password.length && password.length >= 8;
}

console.log(passwordValidation("12345678910"));
console.log(passwordValidation("1234"));
console.log(passwordValidation("0123456789012345678901"));

console.log("==========================================================");