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
