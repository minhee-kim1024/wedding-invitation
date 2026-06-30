/* =============================================================================
   Minjeong & Taeyoon 모바일 청첩장 — main.js
   하는 일은 딱 하나입니다: 버튼(data-action)을 클릭하면 어떤 페이지를
   보여줄지 결정해서 .is-active 클래스를 옮겨줍니다.
============================================================================= */

// 1) index.html에 있는 세 페이지 엘리먼트를 이름으로 찾아 객체에 저장합니다.
//    key(cover/main/details)는 HTML의 data-page 속성, data-action 값과 짝이 맞아야 합니다.
const pages = {
  cover: document.getElementById("page-cover"),
  main: document.getElementById("page-main"),
  details: document.getElementById("page-details"),
};

/**
 * showPage(name)
 * 지정한 이름의 페이지만 보이게 하고, 나머지는 숨깁니다.
 * - 모든 페이지에서 'is-active' 클래스를 일단 제거
 * - 보여줄 페이지에만 다시 'is-active'를 붙임 (CSS의 .page.is-active 규칙이 화면에 표시)
 */
function showPage(name) {
  const target = pages[name];
  if (!target) return; // 혹시 잘못된 이름이 들어오면 아무 것도 하지 않음

  Object.values(pages).forEach((page) => page.classList.remove("is-active"));
  target.classList.add("is-active");

  // 상세 정보 페이지로 이동할 때마다 스크롤 위치를 맨 위로 되돌려서
  // 이전에 스크롤해 둔 위치가 남아있지 않도록 함
  if (name === "details") {
    target.scrollTop = 0;
  }
}

/* =============================================================================
   갤러리 라이트박스 (Gallery 사진을 클릭하면 크게 보여주는 기능)
============================================================================= */

// .details__gallery 안의 모든 <img>를 순서대로 배열에 담아둡니다.
// "이전/다음" 버튼을 눌렀을 때 이 배열 순서를 따라 사진을 넘깁니다.
// 사진을 추가/삭제해도 이 코드는 그대로 동작합니다(배열을 새로 읽어오기 때문).
const galleryImages = Array.from(document.querySelectorAll(".details__gallery img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentGalleryIndex = 0;

/**
 * openLightbox(index)
 * galleryImages 배열에서 index번째 사진을 라이트박스에 크게 띄웁니다.
 * index가 배열 범위를 벗어나면(마지막에서 '다음', 처음에서 '이전') 반대쪽
 * 끝으로 순환하도록 나머지 연산(%)을 사용합니다.
 */
function openLightbox(index) {
  if (galleryImages.length === 0) return;
  currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;
  const photo = galleryImages[currentGalleryIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt;
  lightbox.classList.add("is-open");
}

/** closeLightbox() : 라이트박스를 닫습니다(.is-open 클래스 제거) */
function closeLightbox() {
  lightbox.classList.remove("is-open");
}

/**
 * 클릭 이벤트를 문서 전체에서 한 번만 감지(event delegation)합니다.
 * "Click to open", "Click for the details", "← 처음으로", Gallery 사진,
 * 라이트박스 버튼들까지 — data-action 속성이 있는 요소를 클릭했을 때만 동작합니다.
 *
 * data-action 값 ↔ 동작:
 *   "go-main"        → 메인 청첩장(PAGE 2)으로 이동
 *   "go-details"     → 상세 정보(PAGE 3)로 이동
 *   "lightbox-open"  → 클릭한 Gallery 사진을 라이트박스로 크게 보여줌
 *   "lightbox-close" → 라이트박스 닫기
 *   "lightbox-prev"  → 라이트박스에서 이전 사진
 *   "lightbox-next"  → 라이트박스에서 다음 사진
 */
document.addEventListener("click", (event) => {
  // 라이트박스가 열려있을 때, 사진/버튼이 아닌 어두운 배경 부분을 클릭하면 닫기
  if (event.target === lightbox) {
    closeLightbox();
    return;
  }

  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const action = trigger.dataset.action;
  if (action === "go-main") showPage("main");
  if (action === "go-details") showPage("details");

  if (action === "lightbox-open") {
    openLightbox(galleryImages.indexOf(trigger));
  }
  if (action === "lightbox-close") closeLightbox();
  if (action === "lightbox-prev") openLightbox(currentGalleryIndex - 1);
  if (action === "lightbox-next") openLightbox(currentGalleryIndex + 1);
});

// 키보드 Esc 키로도 라이트박스를 닫을 수 있게 합니다.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
