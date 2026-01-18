const pagenation = document.querySelector('.pagenation');
const totalPage = pagenation.querySelector('.totalPage');
const nowPage = pagenation.querySelector('.nowPage');
const previosButtom = pagenation.querySelector('.prevButton');
const nextButton = pagenation.querySelector('.nextButton');

const recomandGames = document.querySelector('.recomandGamesContainer');
const characterImage = recomandGames.querySelectorAll('img');
const backgroundImage = recomandGames.querySelectorAll('.gameImage');
const gameTitle = recomandGames.querySelectorAll('.gameTitle');
const gameDescription = recomandGames.querySelectorAll('.gameDescription');
const gameType = recomandGames.querySelectorAll('.gameType');

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
  nowPage.textContent = pageCount;
}

function handlerPriviousPage() {
  pageCount--;
  if (pageCount < 1) {
    pageCount = 3;
  }
  getGameInformation();
  nowPage.textContent = pageCount;
}
// 백그라운드 이미지 초기화 기능
function resetBackgroundImage() {
  backgroundImage.item(0).classList.remove(games[0].gameBackgroundClass);
  backgroundImage.item(1).classList.remove(games[1].gameBackgroundClass);
  backgroundImage.item(0).classList.remove(games[2].gameBackgroundClass);
  backgroundImage.item(1).classList.remove(games[3].gameBackgroundClass);
  backgroundImage.item(0).classList.remove(games[4].gameBackgroundClass);
  backgroundImage.item(1).classList.remove(games[5].gameBackgroundClass);
}

// 게임 정보 입력 기능
function setGameInformation(firstIndex, secondIndex) {
  resetBackgroundImage();
  characterImage.item(0).src = IMAGE_PATH + games[firstIndex].gameCharacterImage;
  characterImage.item(1).src = IMAGE_PATH + games[secondIndex].gameCharacterImage;
  backgroundImage.item(0).classList.add(games[firstIndex].gameBackgroundClass);
  backgroundImage.item(1).classList.add(games[secondIndex].gameBackgroundClass);
  gameTitle.item(0).textContent = games[firstIndex].gameName;
  gameTitle.item(1).textContent = games[secondIndex].gameName;
  gameDescription.item(0).textContent = games[firstIndex].gameDescription;
  gameDescription.item(1).textContent = games[secondIndex].gameDescription;
  gameType.item(0).textContent = games[firstIndex].gameType;
  gameType.item(1).textContent = games[secondIndex].gameType;
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

totalPage.textContent = parseInt(pageTotalNumber(Object.keys(games).length));
nextButton.addEventListener('click', handlerNextPage);
previosButtom.addEventListener('click', handlerPriviousPage);
