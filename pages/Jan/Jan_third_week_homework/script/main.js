// 이벤트는 클릭이벤트를 통해 작성
// 최대한 클래스를 이용해 값을 변경하는 방식 사용
// css변경 및 글자 수정은 최소화

// 1. 게임정보 객체 생성
// 들어갈 정보 게임 이름 /게임 배경 및 캐릭터 이미지/ 설명/ 게임 장르/ 게임 id값
// id값은 데이터를 표기할 때 사용 예정

function gameInfo(gameId, gameName, gameBackgroundImage, gameCharactorImage, gameDescription, gameType) {
  return {
    gameId: gameId,
    gameName: gameName,
    gameBackgroundImage: gameBackgroundImage,
    gameCharactorImage: gameCharactorImage,
    gameDescription: gameDescription,
    gameType: gameType,
  };
}

const game0 = gameInfo(0, '크로노 오디세이', '배경.wepb', '캐릭터.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game1 = gameInfo(1, '아케이지 워', '배경-1.wepb', '캐릭터-1.png', '시대의 전설을 향해', 'MMO RPG');
const game2 = gameInfo(2, '패스오브 액자일 2', '배경-2.wepb', '캐릭터-2.png', '얼리 액세스 오픈!', '핵앤슬래쉬');
const game3 = gameInfo(3, '오딘 : 발할라 라이징', '배경-3.wepb', '캐릭터-3.png', '신의 영역을 차지하라', 'MMO RPG');
const game4 = gameInfo(4, '롬 : 리멤버 오브 미제스티', '배경-4.wepb', '캐릭터-4.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game5 = gameInfo(5, '배틀그라운드', '배경-5.wepb', '캐릭터-5.png', '최후까지 생존하라!', '배틀로얄');

let gameInfoWrap = [game0, game1, game2, game3, game4, game5];

const RECOMEND_GAMES = document.querySelector('.recomandGamesContainer');
const PANGENATION = RECOMEND_GAMES.querySelector('.pagenation');
const totalPageNumber = PANGENATION.querySelector('.totalPage');
const nowPageNumber = PANGENATION.querySelector('.nowPage');
const prevButton = PANGENATION.querySelector('.prevButton');
const nextButton = PANGENATION.querySelector('.nextButton');
let pageCount = 1;

function pageTotalNumber(gameQuantity) {
  return Math.ceil(gameQuantity / 2);
}
function handlerPageNextNumber() {
  pageCount++;
  if (pageCount >= 4) {
    pageCount = 1;
  }

  nowPageNumber.textContent = pageCount;
}

function handlerPagePrevNumber() {
  pageCount--;
  if (pageCount < 1) {
    pageCount = 3;
  }

  nowPageNumber.textContent = pageCount;
}
console.log(nextButton);
nextButton.addEventListener('click', handlerPageNextNumber);
prevButton.addEventListener('click', handlerPagePrevNumber);
