// 이벤트는 클릭이벤트를 통해 작성
// 최대한 클래스를 이용해 값을 변경하는 방식 사용
// css변경 및 글자 수정은 최소화

// 1. 게임정보 객체 생성
// 들어갈 정보 게임 이름 /게임 배경 및 캐릭터 이미지/ 설명/ 게임 장르/ 게임 id값
// id값은 데이터를 표기할 때 사용 예정
const PANGENATION = document.querySelector('.pagenation');
const totalPageNumber = PANGENATION.querySelector('.totalPage');
const nowPageNumber = PANGENATION.querySelector('.nowPage');
const prevButton = PANGENATION.querySelector('.prevButton');
const nextButton = PANGENATION.querySelector('.nextButton');
const RECOMEND_GAMES = document.querySelector('.recomandGamesContainer');

const characterImg = document.querySelectorAll('img');
const backgroundImg = document.querySelectorAll('.game-image');
const gameTitle = document.querySelectorAll('.game-title');
const gameDescription = document.querySelectorAll('.game-description');
const gameType = document.querySelectorAll('.game-type');

const IMAGE_PATH = './asset/img/';
//객체생성
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

const game0 = gameInfo(0, '크로노 오디세이', '배경-0.wepb', '캐릭터-0.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game1 = gameInfo(1, '아케이지 워', '배경-1.wepb', '캐릭터-1.png', '시대의 전설을 향해', 'MMO RPG');
const game2 = gameInfo(2, '패스오브 액자일 2', '배경-2.wepb', '캐릭터-2.png', '얼리 액세스 오픈!', '핵앤슬래쉬');
const game3 = gameInfo(3, '오딘:발할라 라이징', '배경-3.wepb', '캐릭터-3.png', '신의 영역을 차지하라', 'MMO RPG');
const game4 = gameInfo(4, '롬:리멤버 오브 미제스티', '배경-4.wepb', '캐릭터-4.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game5 = gameInfo(5, '배틀그라운드', '배경-5.wepb', '캐릭터-5.png', '최후까지 생존하라!', '배틀로얄');

let pageCount = 1;
imageHandeler();

// 추천게임 페이지 넘버 및 버튼 관련 기능
function pageTotalNumber(gameQuantity) {
  return Math.ceil(gameQuantity / 2);
}

function imageHandeler() {
  if (pageCount === 1) {
    // 캐릭터
    characterImg.item(0).src = IMAGE_PATH + game0.gameCharactorImage;
    characterImg.item(1).src = IMAGE_PATH + game1.gameCharactorImage;
    //백그라운드
    backgroundImg.item(0).classList.remove('bg2');
    backgroundImg.item(1).classList.remove('bg3');
    backgroundImg.item(0).classList.remove('bg4');
    backgroundImg.item(1).classList.remove('bg5');

    backgroundImg.item(0).classList.add('bg0');
    backgroundImg.item(1).classList.add('bg1');
    // 제목
    gameTitle.item(0).textContent = game0.gameName;
    gameTitle.item(1).textContent = game1.gameName;
    // 설명
    gameDescription.item(0).textContent = game0.gameDescription;
    gameDescription.item(1).textContent = game1.gameDescription;
    //게임장르
    gameType.item(0).textContent = game0.gameType;
    gameType.item(1).textContent = game1.gameType;
  } else if (pageCount === 2) {
    characterImg.item(0).src = IMAGE_PATH + game2.gameCharactorImage;
    characterImg.item(1).src = IMAGE_PATH + game3.gameCharactorImage;
    //배경
    backgroundImg.item(0).classList.remove('bg0');
    backgroundImg.item(1).classList.remove('bg1');
    backgroundImg.item(0).classList.remove('bg4');
    backgroundImg.item(1).classList.remove('bg5');
    backgroundImg.item(0).classList.add('bg2');
    backgroundImg.item(1).classList.add('bg3');
    // 제목
    gameTitle.item(0).textContent = game2.gameName;
    gameTitle.item(1).textContent = game3.gameName;
    // 설명
    gameDescription.item(0).textContent = game2.gameDescription;
    gameDescription.item(1).textContent = game3.gameDescription;
    //게임장르
    gameType.item(0).textContent = game2.gameType;
    gameType.item(1).textContent = game3.gameType;
  } else {
    characterImg.item(0).src = IMAGE_PATH + game4.gameCharactorImage;
    characterImg.item(1).src = IMAGE_PATH + game5.gameCharactorImage;
    //배경
    backgroundImg.item(0).classList.remove('bg0');
    backgroundImg.item(1).classList.remove('bg1');
    backgroundImg.item(0).classList.remove('bg2');
    backgroundImg.item(1).classList.remove('bg3');

    backgroundImg.item(0).classList.add('bg4');
    backgroundImg.item(1).classList.add('bg5');
    // 제목
    gameTitle.item(0).textContent = game4.gameName;
    gameTitle.item(1).textContent = game5.gameName;
    // 설명
    gameDescription.item(0).textContent = game4.gameDescription;
    gameDescription.item(1).textContent = game5.gameDescription;
    //게임장르
    gameType.item(0).textContent = game4.gameType;
    gameType.item(1).textContent = game5.gameType;
  }
}

function handlerPageNextNumber() {
  pageCount++;
  if (pageCount >= 4) {
    pageCount = 1;
  }
  imageHandeler();
  nowPageNumber.textContent = pageCount;
}

function handlerPagePrevNumber() {
  pageCount--;
  if (pageCount < 1) {
    pageCount = 3;
  }
  imageHandeler();
  nowPageNumber.textContent = pageCount;
}
nextButton.addEventListener('click', handlerPageNextNumber);
prevButton.addEventListener('click', handlerPagePrevNumber);

console.log(backgroundImg);
