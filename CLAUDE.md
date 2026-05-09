# CLAUDE.md — SeanHwang.dev 개인 사이트 프로젝트 지침서

이 파일은 Claude Code가 프로젝트 전체를 이해하고 일관성 있게 작업하기 위한 단일 진실 문서(Single Source of Truth)입니다. 반드시 이 파일을 먼저 읽고 작업을 시작하세요.

> 📁 **콘텐츠 원본 자료**: `Reference/` 폴더에 CV, CEPiEL IR, 학회 자료, K-석유화학 리밸런싱 보고서가 들어 있습니다. Bio·논문·발표 정보는 이 자료를 1차 출처로 사용하세요.

---

## 1. 프로젝트 개요

| 항목 | 내용 |
| :---- | :---- |
| **사이트명** | SeanHwang.dev |
| **소유자** | Prof. Sean Hwang (황성원), Ph.D. |
| **소속** | Professor, Dept. of Chemical Engineering, Inha University<br>Director, CEPI Lab (Clean Energy Process Integration Lab.)<br>Co-founder & CEO, CEPiEL Co., Ltd. |
| **도메인** | `seanhwang.dev` (Cloudflare DNS 관리) |
| **배포** | Cloudflare Pages (Cloudflare DNS와 동일 계정에서 통합 관리) |
| **언어** | 영문 기본 (한국어 토글은 향후 Phase 3) |
| **목적** | AI × Digital Twin × Chemical Process 분야 Thought Leadership 개인 사이트 — 학자(교수)와 창업자(CEO)의 이중 정체성 동시 표현 |

### 1-1. 한 줄 포지셔닝

> *"I build AI systems that make chemical plants smarter — bridging 30+ years of process engineering with modern AI."*

대안:
- *"From UOP refineries to digital twins: applying AI to the world's chemical infrastructure."*
- *"Professor + Founder: turning a decade of CEPI Lab IP into industrial AI digital twins."*

---

## 2. 디자인 철학 — Karpathy 스타일

**벤치마크: [karpathy.ai](https://karpathy.ai)**

Andrej Karpathy의 사이트에서 배워야 할 핵심 원칙:

1. **Radical Simplicity** — 프레임워크 과잉 금지. "0 frameworks" 정신. 복잡한 애니메이션, 과도한 JS 라이브러리 불필요.
2. **콘텐츠 우선** — 화려한 디자인보다 읽히는 글이 먼저. 타이포그래피가 핵심.
3. **빠른 로딩** — 방문자가 느끼는 첫인상 = 속도. 이미지 최적화, 불필요한 의존성 제거.
4. **학자 + 실무자** 이중 정체성 — 논문 리스트도 있고, 실제 동작하는 데모도 있음.
5. **개인 목소리** — 글에서 본인 색깔이 느껴져야 함. 기업 홍보 페이지가 아님.

### Sean 교수님만의 차별화 포인트 (Karpathy에는 없는 것)

- **`/demos` 섹션**: CEPiDTS™ 인터랙티브 데모 — 화학공정 AI 실시간 시뮬레이션. 핵심 경쟁력.
- **이중 정체성**: 교수(Inha CEPI Lab) + 창업자(CEPiEL CEO) 동시 표현 — Karpathy(Tesla→OpenAI→Eureka Labs)와 비슷한 학·산 이동 패턴이지만, Sean 교수님은 **현역 교수 + 현역 CEO** 동시 수행.
- **30+ years 산업 경험**: GS E&C → AspenTech UK → UOP (Honeywell, UK&US) → Inha → CEPiEL — 학자 출신이 아니라 **현장 출신 학자**라는 차별성.
- **검증된 산업 레퍼런스**: LG Chem USD 7.86M/yr 절감, Hanwha Ocean 수소액화 -10.6% SEC 등 — Karpathy의 micrograd / nanoGPT처럼, "실제로 작동한 것"을 보여줌.

---

## 3. 기술 스택

```
Frontend:   Next.js 15 (App Router) + TypeScript + Tailwind CSS
콘텐츠:     MDX (Markdown + JSX) — content/ 폴더에서 관리
배포:       Cloudflare Pages (GitHub 연동 자동 배포)
DNS:        Cloudflare (seanhwang.dev 이미 보유)
Analytics:  Cloudflare Web Analytics (무료, 쿠키 없음)
폼 처리:    Formspree 또는 Cloudflare Workers (Phase 2)
```

**선택 이유:**

- **Next.js App Router**: MDX 지원, 서버 사이드 렌더링, SEO 최적화
- **Cloudflare Pages**: Cloudflare DNS와 동일 계정 → 도메인 연결 1단계로 끝남, 무료
- **MDX**: 코드 없이 글 작성 가능 (마크다운 파일만 추가하면 자동으로 페이지 생성)

---

## 4. 사이트 구조

```
seanhwang.dev/
├── /                   → Home (Hero + 최근 Insights 3개 + CEPiDTS 데모 미리보기)
├── /about              → Bio (학력·경력·수상·Chartered Engineer·ex-UOP)
├── /insights           → 블로그 (MDX, AI/디지털 트윈/화학공정 주제)
├── /research           → 논문 리스트 (CEPI Lab 선별 AI 적용 연구)
├── /talks              → 학회 발표·강연 목록
├── /demos              → CEPiDTS™ 인터랙티브 데모 ⭐ 핵심 차별화
└── /contact            → 강연·자문·협업 문의 창구
```

### 각 페이지 상세 스펙

#### `/` (Home)

- **Hero**: 한 줄 소개 + 포지셔닝 문장
- **최근 Insights** 글 3개 (날짜 + 제목만)
- **CEPiDTS 데모 카드** 1개 (미리보기 이미지 + "Try Demo →" 링크)
- **소셜 링크**: GitHub, LinkedIn, Google Scholar, Inha CEPI Lab, CEPiEL

#### `/about`

서술형 Bio (불렛 리스트 최소화). Reference의 CV(영문)에서 추출한 사실:

**현재 직책**
- Professor, Dept. of Chemical Engineering — Inha University (2012–present)
- Director, CEPI Lab (Clean Energy Process Integration Lab.)
- Co-founder & CEO — CEPiEL Co., Ltd. (2024–present)

**학력 (Education)**
- **Ph.D.**, Process Integration Centre, UMIST (now University of Manchester), UK (2001–2004)
  - Supervisor: Prof. Robin Smith
  - Thesis: *Synthesis of Continuous Heterogeneous Catalytic Reactors*
- **M.Sc.**, Process Integration Centre, UMIST, UK (1999–2000)
  - Thesis: *Molecular Modelling and Optimisation of Naphtha Hydrotreating and Reformer Stabilizer*
- **B.Sc.**, Chemical Engineering, Inha University, Korea (1989–1995)

**산업 경력 (Industry Experience, ~17 years before academia)**
- **UOP (A Honeywell Company)** — Technology Specialist, Catalysts/Absorbents/Specialties (Guildford UK & Des Plaines IL, USA, 2006–2012)
  - Hydroprocessing catalyst Technology Specialist
  - Project Manager for global refinery process design; technology exchange with Exxon-Mobil and Albemarle
  - Co-supervision of postgraduate research at University of Manchester Centre for Process Integration
- **AspenTech UK Ltd.** — Staff Consultant, Advanced Process Design Group (Warrington, UK, 2004–2006)
  - Energy efficiency / GHG reduction consulting for refineries and petrochemical plants across Europe and Asia
- **GS Engineering & Construction (GS E&C)** — Process Engineer, Plant Division (1995–1999)
  - NODCO (Qatar) Naphtha Hydrotreating & CCR detailed design
  - Thai Petrochemical atmospheric/vacuum distillation
  - GS Caltex 4th ADU detailed design

**자격 / 학술 봉사 (Selected)**
- **Chartered Engineer (CEng)**, Engineering Council UK — 2008–present
- Corporate Member, Institution of Chemical Engineers (IChemE), UK
- Editorial Board, *Korean Journal of Chemical Engineering* (KJCE, SCI) — 2017–present
- Editor-in-Chief, Publication Committee, KIChE — 2024–2025
- Chair, Process Systems Sub-committee, KIChE — 2023
- Auditor, Korean Society of Industrial and Engineering Chemistry (KSIEC) — 2026–2027
- Director, Energy Process Integration Convergence Program, Inha University — 2023–present
- Vice Dean of Academic Affairs, Inha University — 2021–2023

**연구 분야**
Digital Twin · AI/ML for Chemical Processes · Carbon Capture (CCU) · Hydrogen Production & Liquefaction · SAF (Sustainable Aviation Fuel) · Process Systems Engineering

**연구 성과 (as of 2026)**
- 65+ SCI(E) journal publications
- 14 domestic & international patents registered
- 16 awards (incl. Daeju AI Award, Daeju Industry-Academia Collaboration Award)
- 14 M.Sc./Ph.D. researchers under supervision
- 28 industry-academia projects (LG Chem, SK Innovation, GS E&C, Hanwha Ocean, KOGAS, Samsung Heavy, SK Nexilis 등)

**글로벌 네트워크**
Joint research with Texas A&M, Tokyo Institute of Technology (Prof. Mori), NTU Singapore (Prof. Bor-Yih Yu), SUNY, Stevens Institute of Technology, USC

#### `/insights`

- MDX 파일 기반 블로그
- **첫 글 추천 주제 (Reference 자료 기반)**:
  1. *"Why Chemical Plants Need Digital Twins Now — and the 3 Pressures Forcing the Issue"* (CBAM, ETS, 베테랑 은퇴)
  2. *"From UOP to Inha: 30 Years of Watching Process Engineering Become AI"*
  3. *"Inside CEPiDTS: A Palantir-Inspired 5-Layer Architecture for Chemical Plants"*
  4. *"How We Cut LG Chem's Utility Cost by USD 7.9M with AutoML"*
- 태그 시스템: `#digital-twin`, `#AI`, `#chemical-engineering`, `#startup`, `#hydrogen`, `#CCU`, `#SAF`

#### `/research`

JSON 또는 MDX frontmatter로 논문 관리. **Reference의 CEPiEL IR 9-1절 / CV에서 선별 (선별 6편 + 50+ 추가)**:

| # | Title | Journal | Year |
|---|---|---|---|
| 1 | Hybrid meta-heuristic + PINN for utility optimization | *JIEC* (in press) | 2026 |
| 2 | Data-driven predictive maintenance for HX — integrated ML | *KIChE* | 2025 |
| 3 | Optimal energy efficiency, exergy & economic analysis for H₂ refrigeration | *Energy* | 2025 |
| 4 | ANN-based modeling for reaction optimization | *J. Cleaner Production* | 2022 |
| 5 | Software platform for ANN modeling & optimization | *Computers & Chem Eng* | 2021 |
| 6 | Unified framework: ANN + GA modeling, prediction, optimization | *Chem Eng J* | 2020 |

전체 65+ 편은 Google Scholar 링크로 연결. 표시 항목: 제목, 저널명, 연도, DOI 링크, 한 줄 요약.

#### `/talks`

학회·기조강연 (Reference의 Conference 자료 + CV 발췌):

| Date | Event | Type | Title |
|---|---|---|---|
| 2026-04-23 | KIChE Spring Conference 2026, Jeju ICC | **Keynote** | Development of key technologies for digital twin implementation in chemical process industry (국내 화학공정 산업의 디지털트윈을 위한 요소 기술 개발) |
| ... | ... | ... | (CV의 다른 발표/초청강연 추가 예정) |

#### `/demos` ⭐ 핵심 차별화

**CEPiDTS™ 데모** (Reference의 IR 자료 Section 3 기반):

- **CEPiDTS™ Platform**: chemical/energy plant 데이터를 AI 디지털 트윈으로 변환하는 end-to-end 산업 AI 플랫폼
- **5-Layer Architecture** (Palantir AIP에서 영감, 화학공정 도메인에 최적화):
  - L1: Data Ingestion (Dapona sensor, DCS/SCADA)
  - L2: Process Ontology (Aspen 1st-principle, DWSIM/OpenFOAM, Data Reconciliation)
  - L3: AI Intelligence Core (AutoML, BO, GA, PINN, LSTM, Soft Sensor CFD, Hybrid Meta-heuristic)
  - L4: Digital Twin (1-min plant-vs-sim 비교, scenario simulation, DI/RUL)
  - L5: Application Services (AR/VR 운전원 훈련 with Cotax, LLM operator interface, ESG 리포트)
- **4개 핵심 모듈**: CEPiPM™ · CEPiML™ · CEPiMS™ · CEPiDTS™

**첫 번째 임베드 데모 후보**:
- 유틸리티 시스템 최적화 시뮬레이터 (가장 빠른 ROI 가시성)
- 검증된 결과를 인터랙티브 차트로 (LG Chem USD 7.86M/yr 절감, Hanwha Ocean H₂ -10.6% SEC, Samsung Heavy LNG -5.25% energy)

설명 문구 예: *"This demo runs a simplified version of CEPiDTS™ — the same engine that helped LG Chem cut USD 7.9M annually from utility OPEX."*

향후 추가:
- Soft sensor 데모 (CFD-AI hybrid)
- CO₂ 포집 RPB 시뮬레이터
- Boiler ML-CFD (1,575× faster than CFD)

#### `/contact`

- 간단한 폼 (이름, 이메일, 문의 유형, 메시지)
- **문의 유형**:
  - Lecture / Keynote
  - Industry Collaboration (CEPiEL 측 → cepiel@cepiel.kr 라우팅)
  - Academic Research (CEPI Lab 측 → sungwon.hwang@inha.ac.kr 라우팅)
  - Media / Interview
- Formspree 또는 Cloudflare Workers로 처리

---

## 5. 파일 구조 (프로젝트 폴더)

```
Sean Homepage/
├── CLAUDE.md                   ← 이 파일
├── README.md
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── mdx-components.tsx
├── .env.local                  ← 민감 정보 (gitignore)
│
├── Reference/                  ← 콘텐츠 원본 자료 (gitignore 권장 — 비공개 원문)
│   ├── CV/
│   │   ├── CV_SungwonHwang_2026.pdf       (영문)
│   │   └── CV_황성원_2026.pdf              (국문)
│   ├── CEPIEL IR_Planning report/
│   │   ├── CEPIEL_IR_Eng.pdf
│   │   └── 사업 기획보고서_ENG.pdf
│   ├── Conference/26.03/
│   │   ├── 260423_한국화학공학회_발표자료_rev6.pdf
│   │   └── 한국화학공학회 공정시스템부문위원회 봄 학술대회 안내.pdf
│   └── Korea PetroChem Rebalancing Proj/
│       └── 251230_(보고서) K-석유화학산업 리밸런싱 프로젝트.pdf
│
├── app/                        ← Next.js App Router
│   ├── layout.tsx              ← 공통 헤더/푸터/폰트
│   ├── page.tsx                ← Home
│   ├── about/page.tsx
│   ├── insights/
│   │   ├── page.tsx            ← 글 목록
│   │   └── [slug]/page.tsx     ← 개별 글
│   ├── research/page.tsx
│   ├── talks/page.tsx
│   ├── demos/page.tsx
│   └── contact/page.tsx
│
├── content/                    ← 콘텐츠 파일 (코드 없이 수정 가능)
│   ├── insights/               ← MDX 블로그 글
│   │   └── digital-twin-intro.mdx
│   ├── research.json           ← 논문 리스트
│   └── talks.json              ← 발표 목록
│
├── components/                 ← 재사용 UI 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── InsightCard.tsx
│   └── demos/
│       └── CEPiDTSDemo.tsx     ← 핵심 데모 컴포넌트
│
├── lib/                        ← 유틸리티 함수
│
└── public/                     ← 정적 파일 (이미지 등)
    ├── images/
    └── favicon.ico
```

⚠️ **`Reference/` 폴더 주의**: 사업 기획보고서, IR, CV는 공개 전 자료입니다. `.gitignore`에 추가하거나 별도 비공개 위치로 옮기는 것을 권장합니다.

---

## 6. 디자인 시스템

### 색상

```css
/* Karpathy 스타일 — 흑백 베이스, 포인트 1개 */
--bg:           #ffffff  (라이트) / #0f0f0f  (다크)
--text:         #111111  (라이트) / #ebebeb  (다크)
--text-muted:   #666666  (라이트) / #888888  (다크)
--accent:       #FA4E40  /* CEPiEL 브랜드 레드 — 링크 hover, 강조 */
--border:       #e5e5e5  (라이트) / #2a2a2a  (다크)
```

⚠️ CEPiEL IR 슬라이드의 `#FA4E40`을 accent color로 유지 → 브랜드 일관성 (CEPI Lab ↔ CEPiEL ↔ SeanHwang.dev 시각적 통일)

### 타이포그래피

```
영문:    Inter (Google Fonts) — 가독성 최우선
한국어:   Pretendard — 향후 한국어 토글 시 사용
코드:    JetBrains Mono
본문:    16–18px, line-height: 1.7
```

### 레이아웃 원칙

- 최대 너비: `680px` (모바일 친화 단일 컬럼, Karpathy와 동일)
- 여백 넉넉하게: 콘텐츠 밀도 낮게 유지
- 네비게이션: 최상단 텍스트 링크 (About · Insights · Research · Talks · Demos · Contact)
- 다크/라이트 모드 토글 버튼 (우상단)

---

## 7. 배포 설정 (Cloudflare Pages)

### 초기 설정 순서

1. GitHub에 `seanhwang-site` 저장소 생성 (private)
2. Cloudflare Dashboard → Pages → "Create a project" → GitHub 연동
3. Build 설정:
   ```
   Framework preset: Next.js
   Build command:    npm run build
   Output directory: .next
   ```
4. 도메인 연결: Pages 설정 → Custom domains → `seanhwang.dev` 추가
   - Cloudflare DNS이므로 자동으로 CNAME 레코드 생성됨 (1분 내 완료)
5. 이후 `main` 브랜치에 push할 때마다 자동 배포

### 환경 변수 (Cloudflare Pages 대시보드에서 설정)

```
# 필요 시 추가
NEXT_PUBLIC_GA_ID=         # Google Analytics (선택)
CONTACT_FORM_ENDPOINT=     # Formspree endpoint
```

---

## 8. 콘텐츠 관리 방법 (코드 없이 업데이트)

### 블로그 글 추가

```bash
# 새 MDX 파일 생성
touch content/insights/why-chemical-plants-need-digital-twins.mdx
```

```mdx
---
title: "Why Chemical Plants Need Digital Twins Now"
date: "2026-05-10"
tags: ["digital-twin", "AI", "chemical-engineering"]
summary: "EU CBAM, K-ETS Phase 4, 그리고 베테랑 은퇴 — 세 가지 압력이 동시에 닥치는 이유"
---

본문 내용 (마크다운으로 작성)...
```

### 논문 추가 (research.json)

```json
{
  "title": "Hybrid meta-heuristic + PINN for utility optimization",
  "journal": "Journal of Industrial and Engineering Chemistry (JIEC)",
  "year": 2026,
  "doi": "https://doi.org/...",
  "summary": "Combining Bayesian optimization, GA, and physics-informed neural networks for petrochemical utility-system optimization."
}
```

### 발표 추가 (talks.json)

```json
{
  "date": "2026-04-23",
  "event": "KIChE Spring Conference 2026",
  "venue": "Jeju ICC",
  "type": "Keynote",
  "title": "Development of key technologies for digital twin implementation in chemical process industry",
  "title_kr": "국내 화학공정 산업의 디지털트윈을 위한 요소 기술 개발"
}
```

---

## 9. 작업 우선순위 (Phase별)

### Phase 1 — MVP (목표: 2주 내 라이브)

- [ ] Next.js 프로젝트 생성 + 기본 레이아웃 (이미 초기 셋업 완료)
- [ ] Home, About, Research 페이지 완성 (Reference 자료 기반)
- [ ] Cloudflare Pages 배포 + seanhwang.dev 도메인 연결
- [ ] 첫 번째 Insights 글 1편 발행 — *"Why Chemical Plants Need Digital Twins Now"*

### Phase 2 — 완성 (목표: 1개월 내)

- [ ] Demos 페이지: CEPiDTS™ 첫 번째 인터랙티브 데모 (유틸리티 최적화 시뮬레이터)
- [ ] Contact 폼 연동 (Formspree, 문의 유형별 라우팅)
- [ ] Talks 페이지 (2026 KIChE Keynote 등록)
- [ ] 다크/라이트 모드 토글
- [ ] Google Scholar 링크 + Open Graph 카드

### Phase 3 — 고도화 (장기)

- [ ] 한국어 토글 (i18n) — 국문 CV 활용
- [ ] Google Scholar 자동 논문 동기화
- [ ] CEPiDTS 추가 데모: Soft sensor, CO₂ RPB, Boiler ML-CFD
- [ ] Newsletter (Buttondown 또는 Beehiiv) — Industrial AI Digital Twin 주제

---

## 10. Claude Code 작업 규칙

1. **이 CLAUDE.md를 항상 먼저 읽을 것** — 새 대화 시작 시 반드시 참조
2. **컴포넌트는 components/ 폴더에** — app/ 폴더에 직접 UI 코드 작성 금지
3. **콘텐츠는 content/ 폴더에** — 페이지 컴포넌트에 하드코딩 금지
4. **색상은 디자인 시스템 참조** — 임의 색상 사용 금지, `--accent: #FA4E40` 준수
5. **의존성 추가 시 이유 명시** — Karpathy 정신: 불필요한 패키지 추가 지양
6. **TypeScript strict mode** — `any` 타입 사용 금지
7. **모바일 퍼스트** — 680px 이하에서 먼저 확인
8. **Reference 폴더 자료 우선** — Bio·논문·발표 정보는 추측하지 말고 Reference의 PDF에서 인용
9. **CEPiEL 도메인은 `cepiel.kr`** — `cepiel.com`, `cepiel.co.kr` 아님

---

## 11. 소유자 정보 (콘텐츠 작성 참고)

### Sean Hwang (황성원), Ph.D.

| 항목 | 내용 |
| :---- | :---- |
| **현재 직책** | Professor, Dept. of Chemical Engineering, Inha University<br>Director, CEPI Lab<br>Co-founder & CEO, CEPiEL Co., Ltd. |
| **Inha 이메일** | sungwon.hwang@inha.ac.kr |
| **Inha 전화** | +82 (0)32 860 7461 |
| **CEPI Lab** | cepi.inha.ac.kr |
| **GitHub** | (직접 기입) |
| **LinkedIn** | (직접 기입) |
| **Google Scholar** | (직접 기입) |
| **ORCID** | (직접 기입) |

### CEPiEL Co., Ltd. (회사)

| 항목 | 내용 |
| :---- | :---- |
| **법인명** | CEPiEL Co., Ltd. |
| **대표 도메인** | **cepiel.kr** (⚠️ `.com` / `.co.kr` 아님) |
| **회사 이메일** | cepiel@cepiel.kr |
| **Korea HQ** | Rm 310, Bldg 1, Kim Hyun-Tae Inha Dream Center, Inha University, 100 Inha-ro, Michuhol-gu, Incheon, Republic of Korea |
| **Korea 전화** | +82 70 4136 9025 |
| **Germany Office** | Carl-Benz-Strasse 5, 68723 Schwetzingen, Germany |
| **Germany 전화** | +49 6202 9506 010 |
| **사업 분야** | Industrial AI Digital Twin Platform for Chemical and Energy Operations |
| **핵심 제품** | CEPiDTS™ (CEPiPM™ + CEPiML™ + CEPiMS™) |
| **공동창업진** | Paul Cho (CMO), Dr. G. Dela Quame (CTO) |

### 주요 키워드 (SEO / 메타 태그용)

`Digital Twin` · `Industrial AI` · `Chemical Process AI` · `CEPiML` · `CEPiDTS` · `Process Systems Engineering` · `CCU` · `Hydrogen Liquefaction` · `SAF (Sustainable Aviation Fuel)` · `AutoML` · `PINN` · `LSTM` · `CFD-AI Hybrid` · `Soft Sensor` · `Inha University` · `CEPI Lab` · `Karpathy-style site`

### 산업 파트너 (콘텐츠/데모에서 언급 가능, NDA 범위 확인)

LG Chem · SK Innovation · SK Nexilis · GS E&C · Hanwha Ocean · Hanwha Solutions · Lotte Chem · KOGAS · Samsung Heavy Industry · Doosan Enerbility · RIST · KITECH · Plasmatech

### 글로벌 학술 협력 네트워크

- **Inha CEPI Lab** — Prof. Hwang + 14 grad students
- **Inha EE** — Prof. Hong-Ki Lim (AI ontology / RAG / LLM)
- **Tokyo Institute of Science and Technology** — Prof. Mori + 7 collaborators
- **NTU (Singapore / Taiwan)** — Prof. Bor-Yih Yu
- Texas A&M, SUNY, Stevens Institute of Technology, USC

---

*이 파일은 프로젝트 진행에 따라 지속적으로 업데이트됩니다.*
*Last updated: 2026-05-10 (Reference 폴더 자료 기반 전면 보강 — CV·CEPiEL IR·KIChE 2026 Keynote 정보 반영)*
