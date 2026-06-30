# Minjeong & Taeyoon 모바일 청첩장

순수 HTML/CSS/JavaScript로만 만들었습니다. 별도 빌드 과정이 없어서 GitHub Pages로 바로 무료 배포할 수 있어요.

## 폴더 구조

```
wedding-invitation/
├── index.html             페이지 구조 (표지 → 청첩장 → 상세정보, 3개 화면)
├── css/style.css           디자인 (색상 · 폰트 · 애니메이션, 클래스마다 주석 있음)
├── js/main.js               화면 전환 로직 (클릭하면 다음 화면으로 이동)
├── images/
│   ├── cover-bg.jpg          표지 배경 사진 ← 이 파일을 본인 사진으로 교체하면 끝
│   ├── logo.png               청첩장 본문 하단의 장식 로고 ← 이 파일을 교체하면 끝
│   └── frame-border.svg      청첩장 화면의 물결 테두리 장식 (보통 수정 불필요)
└── fonts/                    Dream Avenue 폰트 파일을 여기에 넣어주세요 (아래 2번 참고)
```

화면 흐름: **표지(사진+Save the date)** → "Click to open" 클릭 → **청첩장 본문(이름·일시·장소·인사말)** → "Click for the details" 클릭 → **상세 정보(스크롤)**.

---

## 1. 사진 바꾸기

`images/cover-bg.jpg` 파일을 본인의 실제 사진으로 교체하세요.

- 파일 이름을 그대로 `cover-bg.jpg`로 저장하면 코드를 하나도 건드릴 필요가 없습니다.
- 다른 이름으로 저장하고 싶다면 `css/style.css`에서 `.cover__bg` 부분의 `background-image: url(...)` 경로만 바꿔주면 됩니다.
- 세로 사진(예: 1200×2000 정도의 비율)을 추천합니다. 휴대폰 화면을 가득 채우는 배경이라서요.

## 2. 폰트(Dream Avenue) 넣기

요청하신 "Dream Avenue"는 **개인적·비상업적 용도에는 무료**, 상업적 사용은 금지인 라이선스 폰트입니다 (제작자: Muntab_Art). 결혼 청첩장처럼 개인적으로 쓰는 용도라면 문제없지만, 저작권상 폰트 파일을 제가 대신 받아서 코드에 넣어드릴 수는 없어요. 직접 아래 사이트 중 하나에서 받아주세요.

- https://fontsfree.net/dream-avenue-font-download.html
- https://fonnts.com/dream-avenue/
- https://freefonts.co/fonts/dream-avenue-regular

받은 파일(.otf 또는 .ttf)을 `fonts` 폴더에 넣으세요. `css/style.css` 맨 위 `@font-face` 부분이 `fonts/DreamAvenue.woff2` / `.otf` / `.ttf` 순서로 찾도록 되어 있으니, 받은 파일 이름을 `DreamAvenue.otf`(또는 `.ttf`)로 맞추면 별도 수정 없이 바로 적용됩니다. (이름이 다르면 그 줄의 경로만 맞춰주세요.)

> 참고: Dream Avenue는 영문 전용 폰트라 한글은 표시할 수 없어요. 그래서 한글이 들어가는 부분(인사말, 장소 등)은 구글 폰트 **Nanum Myeongjo**를 함께 불러와서 쓰고 있습니다. 폰트 파일을 아직 못 구했어도 화면은 깨지지 않고 한글 폰트로 자연스럽게 대체됩니다.

폰트 적용이 번거로우면 `style.css`의 `--font-script` 변수 값만 다른 구글 폰트(예: `'Cormorant Garamond'`, `'Playfair Display'`)로 바꿔도 비슷한 분위기를 낼 수 있어요.

## 3. 내용 수정하기

`index.html`을 열어 텍스트를 원하는 내용으로 바꾸면 됩니다.

- **표지**: 날짜 `2026.10.09`
- **청첩장 본문**: 이름, 일시 `2026.10.09 12:00`, 장소, 인사말 문구
- **상세 정보(Location / Program)**: 지금 들어있는 시간과 순서는 예시이니 자유롭게 수정하세요.
- **하단 로고**: 청첩장 본문 맨 아래의 장식 이미지는 `images/logo.png` 입니다. 같은 파일명으로 본인 로고/이미지를 넣으면 바로 교체됩니다.
- **Gallery**: 사진 20장이 들어가 있고, 클릭하면 크게 보이는 라이트박스(확대 보기)가 적용되어 있습니다. 지금은 `images/gallery-1.jpg` ~ `gallery-20.jpg` 자리에 임시 플레이스홀더가 들어가 있으니, 같은 파일명으로 본인 사진으로 교체하면 됩니다. 사진 개수를 늘리거나 줄이려면 `index.html`의 `.details__gallery` 안에서 `<img>` 줄을 복사하거나 지우면 되고, `data-action="lightbox-open"` 속성은 지우지 마세요 (라이트박스가 동작하는 데 필요합니다).
- 계좌번호(마음 전하실 곳)·오시는 길 같은 섹션은 `index.html`의 PAGE 3 안에 **주석으로 미리 템플릿**을 만들어 두었습니다. `<!--`와 `-->`를 지우고 내용을 채우면 바로 화면에 나타납니다.

## 4. VS Code로 편집하기

1. VS Code 설치: https://code.visualstudio.com
2. VS Code 실행 → `파일 > 폴더 열기`에서 `wedding-invitation` 폴더 선택
3. 왼쪽 탐색기에서 `index.html`, `css/style.css` 등을 열어 수정
4. 미리보기: `index.html`을 더블클릭해서 브라우저로 열거나, VS Code 확장 "Live Server"를 설치한 뒤 파일 우클릭 → `Open with Live Server`로 실시간 미리보기 가능

## 5. GitHub Pages로 배포하기

1. https://github.com 에서 계정 만들기 (이미 있다면 로그인)
2. 새 저장소(Repository) 생성 — 예: `our-wedding` (Public으로 설정해야 무료 GitHub Pages 사용 가능)
3. Git이 없다면 먼저 설치: https://git-scm.com
4. VS Code 터미널(`보기 > 터미널`)에서 `wedding-invitation` 폴더 기준으로 아래 명령 실행:

   ```bash
   git init
   git add .
   git commit -m "첫 업로드"
   git branch -M main
   git remote add origin https://github.com/내계정/our-wedding.git
   git push -u origin main
   ```

5. GitHub 저장소 페이지 → `Settings` → `Pages`
6. "Build and deployment" → Source를 **Deploy from a branch**, Branch를 **main** / **/(root)** 로 설정 후 `Save`
7. 1~2분 정도 기다리면 같은 페이지 위쪽에 주소가 나타납니다. 보통 형태는:
   `https://내계정.github.io/our-wedding/`
8. 이후 내용을 바꿀 때마다 같은 폴더에서 아래 3줄만 다시 실행하면 자동으로 사이트에 반영됩니다 (보통 1분 이내):

   ```bash
   git add .
   git commit -m "수정 내용"
   git push
   ```

## 6. 카카오톡 공유 미리보기 (선택)

링크를 카카오톡 등으로 공유했을 때 사진 썸네일이 보이게 하려면, `index.html`의 `<head>` 안에 이미 적어둔 Open Graph 주석을 해제하고 배포 후 실제 주소를 넣어주세요.

```html
<meta property="og:title" content="Minjeong & Taeyoon 결혼합니다" />
<meta property="og:description" content="2026.10.09 12:00 | 해운대 파라다이스 호텔 본관 2F 그랜드볼룸" />
<meta property="og:image" content="https://내계정.github.io/our-wedding/images/cover-bg.jpg" />
```

---

문제가 생기면 `index.html` / `css/style.css` / `js/main.js`에 있는 한글 주석을 따라가며 어떤 부분이 어떤 역할을 하는지 확인해보세요. 각 클래스 바로 위에 설명을 적어두었습니다.
