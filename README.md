
# Shopping Project

간단한 쇼핑몰 웹페이지입니다. 상품리스트를 확인할 수 있고 카테고리를 나눠 분류할 수 있습니다. 북마크를 통해 상품 찜 기능을 추가하였습니다.

# Stack



 <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">


 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

 <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">


 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

 <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

 <img src="https://img.shields.io/badge/swc-FFFFFF?style=for-the-badge&logo=&logoColor=white">


<br>

`vite`을 통해 기본적인 프로젝트 환경을 구성했습니다.

SPA로 간단하게 만드는 프로젝트인만큼 `next.js`와 같은 서버사이드렌더링을 도와주는 프레임워크까지는 불필요하다 생각해 `vite`를 사용하였습니다.




<br>

# 웹페이지 영상
<img src='src/assets/shopping.gif'>

|
# 기능

1. 로컬스토리지로 북마크를 저장해두는 기능을 구현했습니다.

2. 상품을 클릭하면 모달창이 띄워지도록 하였으며 이 과정에서 `React-DOM`이 제공하는 `CreatePortal`을 사용했습니다.

3. Loading 상태일때 보여 줄 수 있는 컴포넌트를 구성하였습니다.

4. Header영역의 햄버거 버튼을 클릭하면 보이도록하는 `dropDown`창을 구현했습니다.

5. `React-Router-DOM` 라이브러리를 통해 간단한 라우팅을 구현했습니다.
