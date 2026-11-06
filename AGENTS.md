<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# zero-password-api

0Password 의 규칙 조회 API 와 소개·개인정보처리방침 페이지를 서빙하는 Next.js 앱이다.

기획 상세는 `docs/spec.md` 에 있다. 작업 전에 먼저 읽는다.

## 기본 규칙

- 대화와 PR 설명은 한국어, 코드 식별자와 주석은 영어로 쓴다.
- spec 에 없는 결정(API 형태, 응답, 경로, 캐시 값 등)은 임의로 정하지 말고 먼저 물어본다. 정해지면 spec 을 고친 뒤 구현한다.
- 응답 형식(`200 { domain, rule }` / `404 { error: "not_found" }`)은 zero-password lite 와의 계약이다. 하위 호환을 항상 지킨다: 선택 필드 추가만 하고, 기존 필드·상태 코드의 의미는 바꾸지 않는다 (spec §2.3).
- 브랜치는 git flow 를 따른다 (`main`, `develop`, `feature/*`, `fix/*`, `hotfix/*`). PR 제목은 conventional 형식(`feat: ...`, `fix: ...`).
- 작업이 끝나면 `bun run lint` 와 `bun run build` 를 확인한다.

## 스택과 배포

- Next.js 16, React 19, Tailwind 4, 패키지 매니저 bun.
- 규칙 데이터는 npm 패키지 `zero-password`(db 저장소의 full 버전)에서 읽는다. 버전은 `bun.lock` 으로 고정된다.
- Vercel 에 배포. `main` 에 머지되면 자동 배포된다. 주소는 `https://0password.startergate.dev`.

## 핵심 구조

- `pages/api/[domain].ts`: `GET /api/{domain}`. `findRule` 로 규칙을 찾아 돌려준다.
- `app/`: 랜딩 페이지와 레이아웃.
- `next.config.ts`: `zero-password` 의 `databases/` 를 API 번들에 포함하는 `outputFileTracingIncludes` 설정. API 경로를 옮기면 이 키도 같이 고친다.
