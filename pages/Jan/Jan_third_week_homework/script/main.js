// 이벤트는 클릭이벤트를 통해 작성
// 최대한 클래스를 이용해 값을 변경하는 방식 사용
// css변경 및 글자 수정은 최소화

// 1. 게임정보 객체 생성
// 들어갈 정보 게임 이름 /게임 배경 및 캐릭터 이미지/ 설명/ 게임 장르/ 게임 id값
// id값은 데이터를 표기할 때 사용 예정
const PANGENATION = document.querySelector('.pagenation');
const TOTAL_PAGE = PANGENATION.querySelector('.totalPage');
const NOW_PAGE = PANGENATION.querySelector('.nowPage');
const PRIVIOUS_BUTTON = PANGENATION.querySelector('.prevButton');
const NEXT_BUTTON = PANGENATION.querySelector('.nextButton');

const RECOMEND_GAMES = document.querySelector('.recomandGamesContainer');
const CHARACTER_IMAGE = RECOMEND_GAMES.querySelectorAll('img');
const BACKGROUND_IMAGE = RECOMEND_GAMES.querySelectorAll('.gameImage');
const GAME_TITLE = RECOMEND_GAMES.querySelectorAll('.gameTitle');
const GAME_DESCRIPTION = RECOMEND_GAMES.querySelectorAll('.gameDescription');
const GAME_TYPE = RECOMEND_GAMES.querySelectorAll('.gameType');

const IMAGE_PATH = './asset/img/';
//객체생성
function gameInformation(gameId, gameName, gameBackgroundImage, gameCharactorImage, gameDescription, gameType) {
  return {
    gameId: gameId,
    gameName: gameName,
    gameBackgroundImage: gameBackgroundImage,
    gameCharactorImage: gameCharactorImage,
    gameDescription: gameDescription,
    gameType: gameType,
  };
}

const game0 = gameInformation(0, '크로노 오디세이', '배경-0.wepb', '캐릭터-0.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game1 = gameInformation(1, '아케이지 워', '배경-1.wepb', '캐릭터-1.png', '시대의 전설을 향해', 'MMO RPG');
const game2 = gameInformation(2, '패스오브 액자일 2', '배경-2.wepb', '캐릭터-2.png', '얼리 액세스 오픈!', '핵앤슬래쉬');
const game3 = gameInformation(3, '오딘:발할라 라이징', '배경-3.wepb', '캐릭터-3.png', '신의 영역을 차지하라', 'MMO RPG');
const game4 = gameInformation(4, '롬:리멤버 오브 미제스티', '배경-4.wepb', '캐릭터-4.png', '멈춰 있던 시간이 흐른다', 'MMO RPG');
const game5 = gameInformation(5, '배틀그라운드', '배경-5.wepb', '캐릭터-5.png', '최후까지 생존하라!', '배틀로얄');

let pageCount = 1;
imageHandeler();

// 추천게임 페이지 넘버 및 버튼 관련 기능
function pageTotalNumber(gameQuantity) {
  return Math.ceil(gameQuantity / 2);
}

function imageHandeler() {
  if (pageCount === 1) {
    // 캐릭터
    CHARACTER_IMAGE.item(0).src = IMAGE_PATH + game0.gameCharactorImage;
    CHARACTER_IMAGE.item(1).src = IMAGE_PATH + game1.gameCharactorImage;
    //백그라운드
    BACKGROUND_IMAGE.item(0).classList.remove('bg2');
    BACKGROUND_IMAGE.item(1).classList.remove('bg3');
    BACKGROUND_IMAGE.item(0).classList.remove('bg4');
    BACKGROUND_IMAGE.item(1).classList.remove('bg5');

    BACKGROUND_IMAGE.item(0).classList.add('bg0');
    BACKGROUND_IMAGE.item(1).classList.add('bg1');
    // 제목
    GAME_TITLE.item(0).textContent = game0.gameName;
    GAME_TITLE.item(1).textContent = game1.gameName;
    // 설명
    GAME_DESCRIPTION.item(0).textContent = game0.gameDescription;
    GAME_DESCRIPTION.item(1).textContent = game1.gameDescription;
    //게임장르
    GAME_TYPE.item(0).textContent = game0.gameType;
    GAME_TYPE.item(1).textContent = game1.gameType;
  } else if (pageCount === 2) {
    CHARACTER_IMAGE.item(0).src = IMAGE_PATH + game2.gameCharactorImage;
    CHARACTER_IMAGE.item(1).src = IMAGE_PATH + game3.gameCharactorImage;
    //배경
    BACKGROUND_IMAGE.item(0).classList.remove('bg0');
    BACKGROUND_IMAGE.item(1).classList.remove('bg1');
    BACKGROUND_IMAGE.item(0).classList.remove('bg4');
    BACKGROUND_IMAGE.item(1).classList.remove('bg5');
    BACKGROUND_IMAGE.item(0).classList.add('bg2');
    BACKGROUND_IMAGE.item(1).classList.add('bg3');
    // 제목
    GAME_TITLE.item(0).textContent = game2.gameName;
    GAME_TITLE.item(1).textContent = game3.gameName;
    // 설명
    GAME_DESCRIPTION.item(0).textContent = game2.gameDescription;
    GAME_DESCRIPTION.item(1).textContent = game3.gameDescription;
    //게임장르
    GAME_TYPE.item(0).textContent = game2.gameType;
    GAME_TYPE.item(1).textContent = game3.gameType;
  } else {
    CHARACTER_IMAGE.item(0).src = IMAGE_PATH + game4.gameCharactorImage;
    CHARACTER_IMAGE.item(1).src = IMAGE_PATH + game5.gameCharactorImage;
    //배경
    BACKGROUND_IMAGE.item(0).classList.remove('bg0');
    BACKGROUND_IMAGE.item(1).classList.remove('bg1');
    BACKGROUND_IMAGE.item(0).classList.remove('bg2');
    BACKGROUND_IMAGE.item(1).classList.remove('bg3');

    BACKGROUND_IMAGE.item(0).classList.add('bg4');
    BACKGROUND_IMAGE.item(1).classList.add('bg5');
    // 제목
    GAME_TITLE.item(0).textContent = game4.gameName;
    GAME_TITLE.item(1).textContent = game5.gameName;
    // 설명
    GAME_DESCRIPTION.item(0).textContent = game4.gameDescription;
    GAME_DESCRIPTION.item(1).textContent = game5.gameDescription;
    //게임장르
    GAME_TYPE.item(0).textContent = game4.gameType;
    GAME_TYPE.item(1).textContent = game5.gameType;
  }
}

function handlerPageNextNumber() {
  pageCount++;
  if (pageCount >= 4) {
    pageCount = 1;
  }
  imageHandeler();
  NOW_PAGE.textContent = pageCount;
}

function handlerPagePrevNumber() {
  pageCount--;
  if (pageCount < 1) {
    pageCount = 3;
  }
  imageHandeler();
  NOW_PAGE.textContent = pageCount;
}
NEXT_BUTTON.addEventListener('click', handlerPageNextNumber);
PRIVIOUS_BUTTON.addEventListener('click', handlerPagePrevNumber);
