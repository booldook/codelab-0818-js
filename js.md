# Javascript
## ES6지원 브라우저
- https://compat-table.github.io/compat-table/es6/

## 예상 로드맵
### 0819 ~ 25
- 변수, 변수의 데이터타입
- 연산자
- 제어문
- 반복문
- 함수선언문, 함수표현식, 호이스팅
- 배열, 배열메서드, callback
- 객체, prototype(class), 객체메서드
- 통신
  - promise, async/await(비동기)
  - json
  - ajax (jquery + ajax, fetch)
- 예제
  - string메서드, number메서드, Date, Math
  - DOM 핸들링
  - jQuery

### 0826 ~ 미정
- npm 생태계
- typescript
- react feat.typescript, scss - 위에서 여기까지: 프론트엔드
  - scss, webpack, babel, vite ... SSR, CSR ... RTK, zustand, axios(전, 후처리)
- node + sql(DB/DBMS) - 백엔드
- next - 프론트엔드 feat.node
  - 인증, 인가
  - 지도
  - vibeCoding for figma

### 프로젝트 (150시간 ~ 160시간)
  - chatbot UI
  - 일정관리/칸반보드(trello UI), 맛집소개, 애견케어 ..., 지도
### devOps
  - 리눅스 명령어
  - aws / ec2(2) - nginx, mariaDB, node ... / vpc(private, public)/ NAT GW / bastion Hosting / ALB / Route53 / cloudFront(CDN)/ s3(저장소) /(SSL무료) / github / Jenkins(CI) / ArgoCD(CD) / 설치자동화(Terraform), 운영자동화(Ansible) / K8s(EKS) / 
  - 포트폴리오 배포 방식 결정: 예정
### AI


## JS 개요
### 프로그래밍 언어
대상: 객체(Object, Class)
  속성: 변수 (const, variable) -> abc
  행동: 함수 (method, function) -> abc(...)
- 자바스크립트: 브라우저에서 동작하는 프로그래밍 언어
window > head : Browser
document == body : Brower의 표현영역
alert, confirm, prompt등 window객체가 가지고 있는 함수를 내장함수라 한다.

### 언어
  - 변수, 함수, 제어(if, switch), 반복(for, for~in, for~of, while, do~while)
  - for(초기값(변수=값); 조건; 증감) {반복할 내용}

.containers
    .title-container
      h1.title-wrapper
    .main-container
      .info-wrapper
        .title-wrap
        .content-wrap
      .map-wrapper
        .title-wrap
        .content-wrap 