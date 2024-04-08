
let slides = document.querySelectorAll(".inner > img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let current = 0;

showSlide(current);

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
}

prev.onclick = preSlide;
next.onclick = nextSlide;

function preSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}

// 자동으로 다음 슬라이드로 전환하는 함수
function autoSlide() {
  nextSlide();
}

// 7초마다 자동으로 전환
let slideInterval = setInterval(autoSlide, 7000);

// 마우스가 슬라이드 위에 있을 때 자동 전환 멈추기
slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
  });
});

// 마우스가 슬라이드에서 벗어날 때 자동 전환 다시 시작
slides.forEach(slide => {
  slide.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 7000);
  });
});






//뭉냥이들 랜덤 사진뿌기

// 이미지와 동물 이름을 포함하는 객체 배열
let imagesData = [
  { url: './img/강아지_고양이_상세/고양이1.jpeg', name: '브리티쉬 먼치킨 - 미미', link: './강아지,고양이 상세/02_고양이상세.html' },
  { url: './img/강아지_고양이_상세/고양이2.jpeg', name: '브리티쉬 - 숏헤어 - 로미', link: './강아지,고양이 상세/02_고양이상세2.html' },
  { url: './img/강아지_고양이_상세/고양이9.jpeg', name: '랙돌 - 구름이', link: './강아지,고양이 상세/02_고양이상세3.html' },
  { url: './img/강아지_고양이_상세/고양이14.jpeg', name: '노르웨이 숲 - 나로', link: '' },
  { url: './img/강아지_고양이_상세/고양이5.jpeg', name: '아메리칸 숏헤어 - 뭉치', link: '' },
  { url: './img/강아지_고양이_상세/고양이6.jpeg', name: '브리티쉬 먼치킨 - 홀리', link: '' },
  { url: './img/강아지_고양이_상세/고양이7.jpeg', name: '데본 렉스 - 하토', link: '' },
  { url: './img/강아지_고양이_상세/고양이8.jpeg', name: '먼치킨 미뉴엣 - 패돌', link: '' },
  { url: './img/강아지_고양이_상세/고양이9.jpeg', name: '프리티쉬 숏헤어 - 소금', link: '' },
  { url: './img/강아지_고양이_상세/고양이13.jpeg', name: '골드 브리티쉬 - 금이', link: '' },
  { url: './img/강아지_고양이_상세/고양이15.jpeg', name: '러시안 블루 - 알콩', link: '' },
  { url: './img/강아지_고양이_상세/고양이12.jpeg', name: '브리티쉬 먼치킨 - 꼬막', link: '' },
  { url: './img/강아지_고양이_상세/강아지1.jpeg', name: '파티말티즈 - 애니', link: './강아지,고양이 상세/04_강아지상세3.html' },
  { url: './img/강아지_고양이_상세/강아지12.jpeg', name: '토이푸들 - 누리', link: './강아지,고양이 상세/04_강아지상세2.html' },
  { url: './img/강아지_고양이_상세/강아지3.jpeg', name: '미니말티즈 - 찹쌀', link: './강아지,고양이 상세/04_강아지상세4.html' },
  { url: './img/강아지_고양이_상세/강아지2.jpeg', name: '미니말티푸 - 망고', link: './강아지,고양이 상세/04_강아지상세.html' },
  { url: './img/강아지_고양이_상세/강아지5.jpeg', name: '미니비숑 - 카도', link: '' },
  { url: './img/강아지_고양이_상세/강아지6.jpeg', name: '미니말티푸 - 옹심이', link: '' },
  { url: './img/강아지_고양이_상세/강아지7.jpeg', name: '말티즈 - 하루', link: '' },
  { url: './img/강아지_고양이_상세/강아지8.jpeg', name: '미니말티즈 - 뿌꾸', link: ''},
  { url: './img/강아지_고양이_상세/강아지9.jpeg', name: '미니말티푸 - 설렘이', link: '' },
  { url: './img/강아지_고양이_상세/강아지10.jpeg', name: '미니비숑 남매 - 설이,설우', link: '' },
  { url: './img/강아지_고양이_상세/강아지11.jpeg', name: '실버토이푸들 - 초코', link: '' },
  { url: './img/강아지_고양이_상세/강아지4.jpeg', name: '토이푸들 - 팝콘이', link: '' },
  { url: './img/강아지_고양이_상세/고양이6.jpeg', name: '브리티쉬 먼치킨 - 홀리', link: '' },
  { url: './img/강아지_고양이_상세/고양이7.jpeg', name: '데본 렉스 - 하토', link: '' },
  { url: './img/강아지_고양이_상세/고양이8.jpeg', name: '먼치킨 미뉴엣 - 패돌', link: '' },
  { url: './img/강아지_고양이_상세/고양이9.jpeg', name: '브리티쉬 숏헤어 - 소금', link: '' },
  { url: './img/강아지_고양이_상세/고양이13.jpeg', name: '골드 브리티쉬 - 금이', link: '' },
  { url: './img/강아지_고양이_상세/고양이15.jpeg', name: '러시안 블루 - 알콩', link: '' },
  { url: './img/강아지_고양이_상세/고양이12.jpeg', name: '브리티쉬 먼치킨 - 꼬막', link: '' },
  { url: './img/강아지_고양이_상세/고양이16.jpeg', name: '데본 렉스 - 봉봉', link: '' },
  { url: './img/강아지_고양이_상세/고양이17.jpeg', name: '브리티쉬 자매 - 하나,두나', link: '' },
  { url: './img/강아지_고양이_상세/고양이18.jpeg', name: '데본 렉스 - 달래', link: '' },
  { url: './img/강아지_고양이_상세/고양이19.jpeg', name: '브리티쉬 숏헤어 - 치치', link: '' },
  { url: './img/강아지_고양이_상세/고양이20.jpeg', name: '노르웨이 숲 - 유미', link: '' },
  { url: './img/강아지_고양이_상세/고양이21.jpeg', name: '랙돌 - 단이', link: '' },
  // 원하는 만큼 이미지 URL과 동물 이름, 링크를 추가
];

// 이미지 요소 생성 함수
function createImageElement(imageUrl, animalName, link) {
  let wrapper = document.createElement('div');
  wrapper.classList.add('randomImageWrapper');

  let img = document.createElement('img');
  img.classList.add('randomImage');
  img.src = imageUrl;
  img.alt = 'Random Image';
  img.onclick = function () {
    window.location.href = link;
  };

  let nameElem = document.createElement('div');
  nameElem.classList.add('animalName');
  nameElem.textContent = animalName;

  wrapper.appendChild(img);
  wrapper.appendChild(nameElem);

  return wrapper;
}



// 랜덤 이미지 선택 함수
function getRandomImages(count) {
  let randomImages = [];
  let shuffledData = imagesData.slice(); // 배열 복사
  shuffledData.sort(() => Math.random() - 0.5); // 배열 랜덤 섞기
  for (let i = 0; i < count; i++) {
    randomImages.push(shuffledData[i]);
  }
  return randomImages;
}

// 초기 이미지 로드
let initialImages = getRandomImages(9);
let container = document.getElementById('randomImageContainer');
initialImages.forEach(function (data) {
  let img = createImageElement(data.url, data.name, data.link);
  container.appendChild(img);
});

// 더 보기 버튼 클릭 시 이벤트 처리
document.getElementById('loadMoreButton').addEventListener('click', function () {
  let additionalImages = getRandomImages(9);
  additionalImages.forEach(function (data) {
    let img = createImageElement(data.url, data.name, data.link);
    container.appendChild(img);
  });
});






// 후기보기 스크립트 드래그 스크롤

// 요소 & 사이즈
const list = document.querySelector('.list');
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;
// 이벤트마다 갱신될 값
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

const onScrollStart = (e) => {
  startX = getClientX(e);
  window.addEventListener('mousemove', onScrollMove);
  window.addEventListener('touchmove', onScrollMove);
  window.addEventListener('mouseup', onScrollEnd);
  window.addEventListener('touchend', onScrollEnd);
};


const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};


const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener('mousedown', onScrollStart);
  window.removeEventListener('touchstart', onScrollStart);
  window.removeEventListener('mousemove', onScrollMove);
  window.removeEventListener('touchmove', onScrollMove);
  window.removeEventListener('mouseup', onScrollEnd);
  window.removeEventListener('touchend', onScrollEnd);
  window.removeEventListener('click', onClick);

  setTimeout(() => {
    bindEvents();
    list.style.transition = '';
  }, 300);
};


const onClick = (e) => {
  if (startX - endX !== 0) {
    e.preventDefault();
  }
};

const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
};

const setTranslateX = (x) => {
  list.style.transform = `translateX(${x}px)`;
};

const bindEvents = () => {
  list.addEventListener('mousedown', onScrollStart);
  list.addEventListener('touchstart', onScrollStart);
  list.addEventListener('click', onClick);
};
bindEvents();
