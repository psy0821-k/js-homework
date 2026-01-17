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

//게임에 대한 객체생성
function gameInformation(gameName, gameBackgroundClass, gameCharacterImage, gameDescription, gameType) {
  return {
    gameName: gameName,
    gameBackgroundClass: gameBackgroundClass,
    gameCharacterImage: gameCharacterImage,
    gameDescription: gameDescription,
    gameType: gameType,
  };
}

const games = {
  0: gameInformation('크로노 오디세이', 'bg0', '캐릭터-0.png', '멈춰 있던 시간이 흐른다', 'MMO RPG'),
  1: gameInformation('아케이지 워', 'bg1', '캐릭터-1.png', '시대의 전설을 향해', 'MMO RPG'),
  2: gameInformation('패스오브 액자일 2', 'bg2', '캐릭터-2.png', '얼리 액세스 오픈!', '핵앤슬래쉬'),
  3: gameInformation('오딘:발할라 라이징', 'bg3', '캐릭터-3.png', '신의 영역을 차지하라', 'MMO RPG'),
  4: gameInformation('롬:리멤버 오브 미제스티', 'bg4', '캐릭터-4.png', '멈춰 있던 시간이 흐른다', 'MMO RPG'),
  5: gameInformation('배틀그라운드', 'bg5', '캐릭터-5.png', '최후까지 생존하라!', '배틀로얄'),
};

// 추천게임 페이지 넘버 및 이전 다음 버튼 관련 기능
function pageTotalNumber(gameQuantity) {
  return Math.ceil(gameQuantity / 2);
}
function handlerNextPage() {
  pageCount++;
  if (pageCount >= 4) {
    pageCount = 1;
  }
  getGameInformation();
  NOW_PAGE.textContent = pageCount;
}

function handlerPriviousPage() {
  pageCount--;
  if (pageCount < 1) {
    pageCount = 3;
  }
  getGameInformation();
  NOW_PAGE.textContent = pageCount;
}
// 백그라운드 이미지 초기화 기능
function resetBackgroundImage() {
  BACKGROUND_IMAGE.item(0).classList.remove(games[0].gameBackgroundClass);
  BACKGROUND_IMAGE.item(1).classList.remove(games[1].gameBackgroundClass);
  BACKGROUND_IMAGE.item(0).classList.remove(games[2].gameBackgroundClass);
  BACKGROUND_IMAGE.item(1).classList.remove(games[3].gameBackgroundClass);
  BACKGROUND_IMAGE.item(0).classList.remove(games[4].gameBackgroundClass);
  BACKGROUND_IMAGE.item(1).classList.remove(games[5].gameBackgroundClass);
}

// 게임 정보 입력 기능
function setGameInformation(firstIndex, secondIndex) {
  resetBackgroundImage();
  CHARACTER_IMAGE.item(0).src = IMAGE_PATH + games[firstIndex].gameCharacterImage;
  CHARACTER_IMAGE.item(1).src = IMAGE_PATH + games[secondIndex].gameCharacterImage;

  BACKGROUND_IMAGE.item(0).classList.add(games[firstIndex].gameBackgroundClass);
  BACKGROUND_IMAGE.item(1).classList.add(games[secondIndex].gameBackgroundClass);

  BACKGROUND_IMAGE.item(1).classList.add('bg' + secondIndex);
  GAME_TITLE.item(0).textContent = games[firstIndex].gameName;
  GAME_TITLE.item(1).textContent = games[secondIndex].gameName;
  GAME_DESCRIPTION.item(0).textContent = games[firstIndex].gameDescription;
  GAME_DESCRIPTION.item(1).textContent = games[secondIndex].gameDescription;
  GAME_TYPE.item(0).textContent = games[firstIndex].gameType;
  GAME_TYPE.item(1).textContent = games[secondIndex].gameType;
}

//  게임 정보 출력 기능
function getGameInformation() {
  if (pageCount === 1) {
    setGameInformation(0, 1);
  } else if (pageCount === 2) {
    setGameInformation(2, 3);
  } else {
    setGameInformation(4, 5);
  }
}

// 최초 실행 시 현재 페이지 및 이미지 적용
let pageCount = 1;
getGameInformation();

TOTAL_PAGE.textContent = parseInt(pageTotalNumber(Object.keys(games).length));
NEXT_BUTTON.addEventListener('click', handlerNextPage);
PRIVIOUS_BUTTON.addEventListener('click', handlerPriviousPage);
