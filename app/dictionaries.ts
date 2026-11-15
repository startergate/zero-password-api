// Landing page copy. `/` renders English until language paths (/{lang}) land.
export const dictionaries = {
  en: {
    title: "0Password",
    description: "See a site's password rules right on its login screen.",
    tagline: "See a site's password rules right on its login screen, before you guess and get rejected.",
    points: [
      "Shows the rules under the password field: length, required characters, what is not allowed.",
      "Checks your input against each rule as you type, without sending it anywhere.",
      "Stores no passwords. It only collects each site's rules, gathered by contributors on GitHub.",
    ],
    install: "Chrome Web Store",
    installSoon: "Coming soon",
    reportTitle: "Missing a site?",
    reportBody: "Rules are collected in the open. Request a rule for a site on GitHub.",
    report: "Request a rule",
    sourceTitle: "Source code",
    repositories: {
      db: "Rule database",
      api: "API and this site",
      chrome: "Chrome extension",
    },
  },
  ko: {
    title: "0Password",
    description: "로그인 화면에서 그 사이트의 비밀번호 규칙을 바로 보여줍니다.",
    tagline: "로그인 화면에서 그 사이트의 비밀번호 규칙을 바로 보여줍니다. 짐작하다 틀릴 필요 없이요.",
    points: [
      "비밀번호 입력란 아래에 길이, 꼭 넣어야 하는 문자, 쓸 수 없는 문자 같은 규칙을 보여줍니다.",
      "입력하는 동안 규칙마다 충족 여부를 확인합니다. 입력값은 어디에도 보내지 않습니다.",
      "비밀번호는 저장하지 않습니다. 기여자들이 GitHub 에서 모은 사이트별 규칙만 씁니다.",
    ],
    install: "크롬 웹스토어",
    installSoon: "준비 중",
    reportTitle: "찾는 사이트가 없나요?",
    reportBody: "규칙은 공개적으로 모읍니다. GitHub 에서 사이트 규칙을 요청할 수 있어요.",
    report: "규칙 요청하기",
    sourceTitle: "소스 코드",
    repositories: {
      db: "규칙 데이터베이스",
      api: "API 와 이 사이트",
      chrome: "크롬 익스텐션",
    },
  },
} as const

export type Locale = keyof typeof dictionaries
export type Dictionary = (typeof dictionaries)[Locale]

export const links = {
  ruleRequest: "https://github.com/startergate/zero-password-db/issues/new?template=rule-request.yml",
  repositories: {
    db: "https://github.com/startergate/zero-password-db",
    api: "https://github.com/startergate/zero-password-api",
    chrome: "https://github.com/startergate/zero-password-chrome",
  },
} as const
