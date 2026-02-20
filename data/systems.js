// =============================================
// 🗂️ systems.js - 시스템 공략 & 상세 공략 데이터
// =============================================

const systemsData = {

    // 신화 각성 수치
    mythAwakening: [
        {stage:"13성", value:"200%",        rate:"-"},
        {stage:"14성", value:"300%",        rate:"50.0%"},
        {stage:"15성", value:"500%",        rate:"66.7%"},
        {stage:"16성", value:"1,000%",      rate:"100.0%"},
        {stage:"17성", value:"2,000%",      rate:"100.0%"},
        {stage:"18성", value:"3,500%",      rate:"75.0%"},
        {stage:"19성", value:"6,000%",      rate:"71.4%"},
        {stage:"20성", value:"10,000%",     rate:"66.7%"},
        {stage:"21성", value:"18,000%",     rate:"80.0%"},
        {stage:"22성", value:"30,000%",     rate:"66.7%"},
        {stage:"23성", value:"55,000%",     rate:"83.3%"},
        {stage:"24성", value:"100,000%",    rate:"81.8%"},
        {stage:"25성", value:"180,000%",    rate:"80.0%"},
        {stage:"1각성",  value:"270,000%",  rate:"50.0%",  awakening:true},
        {stage:"2각성",  value:"360,000%",  rate:"33.3%",  awakening:true},
        {stage:"3각성",  value:"540,000%",  rate:"50.0%",  awakening:true},
        {stage:"4각성",  value:"810,000%",  rate:"50.0%",  awakening:true},
        {stage:"5각성",  value:"1,080,000%",rate:"33.3%",  awakening:true},
        {stage:"6각성",  value:"1,620,000%",rate:"50.0%",  awakening:true},
        {stage:"7각성",  value:"2,340,000%",rate:"44.4%",  awakening:true},
        {stage:"8각성",  value:"3,060,000%",rate:"30.8%",  awakening:true},
        {stage:"9각성",  value:"3,780,000%",rate:"23.5%",  awakening:true},
        {stage:"10각성", value:"4,680,000%",rate:"23.8%",  awakening:true},
    ],

    // 전설 각성 수치
    legendAwakening: [
        {stage:"13성", value:"50%",         rate:"-"},
        {stage:"14성", value:"150%",        rate:"200.0%"},
        {stage:"15성", value:"300%",        rate:"100.0%"},
        {stage:"16성", value:"600%",        rate:"100.0%"},
        {stage:"17성", value:"1,200%",      rate:"100.0%"},
        {stage:"18성", value:"2,000%",      rate:"66.7%"},
        {stage:"19성", value:"3,200%",      rate:"60.0%"},
        {stage:"20성", value:"5,000%",      rate:"56.3%"},
        {stage:"21성", value:"7,000%",      rate:"40.0%"},
        {stage:"22성", value:"9,000%",      rate:"28.6%"},
        {stage:"23성", value:"11,000%",     rate:"22.2%"},
        {stage:"24성", value:"13,000%",     rate:"18.2%"},
        {stage:"25성", value:"15,000%",     rate:"15.4%"},
        {stage:"1각성",  value:"22,500%",   rate:"50.0%",  awakening:true},
        {stage:"2각성",  value:"30,000%",   rate:"33.3%",  awakening:true},
        {stage:"3각성",  value:"45,000%",   rate:"50.0%",  awakening:true},
        {stage:"4각성",  value:"67,500%",   rate:"50.0%",  awakening:true},
        {stage:"5각성",  value:"90,000%",   rate:"33.3%",  awakening:true},
        {stage:"6각성",  value:"135,000%",  rate:"50.0%",  awakening:true},
        {stage:"7각성",  value:"195,000%",  rate:"44.4%",  awakening:true},
        {stage:"8각성",  value:"255,000%",  rate:"30.8%",  awakening:true},
        {stage:"9각성",  value:"315,000%",  rate:"23.5%",  awakening:true},
        {stage:"10각성", value:"390,000%",  rate:"23.8%",  awakening:true},
    ],

    // 공통 각성 단계 수치
    commonAwakening: [
        {stage:"1각",  value:"50%"},
        {stage:"2각",  value:"100%"},
        {stage:"3각",  value:"200%"},
        {stage:"4각",  value:"350%"},
        {stage:"5각",  value:"500%",  highlight:true},
        {stage:"6각",  value:"800%"},
        {stage:"7각",  value:"1,200%"},
        {stage:"8각",  value:"1,600%"},
        {stage:"9각",  value:"2,000%"},
        {stage:"10각", value:"2,500%", highlight:true},
    ],

    // 히든 트로피 목록
    hiddenTrophies: [
        { name:"어항 수집가",        condition:"어항 충전 키트 누적 10만개" },
        { name:"진짜 VIP",           condition:"VIP 블랙 이상" },
        { name:"행운아",             condition:"전설 룬 획득" },
        { name:"베스트 프렌드",       condition:"친구 20명" },
        { name:"대포 수집가",         condition:"대포 24종" },
        { name:"스킬 수집가",         condition:"스킬 33종" },
        { name:"동료 수집가",         condition:"동료 46종" },
        { name:"탈것 수집가",         condition:"탈것 15종" },
        { name:"마을 수비대",         condition:"마을 방어 20회" },
        { name:"약탈 왕",             condition:"마을 약탈 50회" },
        { name:"심술궂은 고양씨",     condition:"마을 못 30회" },
        { name:"친절한 고양씨",       condition:"마을 도움 100회" },
        { name:"파괴 왕",             condition:"장비 분해 20회" },
        { name:"마이다스 손",         condition:"장비 합성 30회 실패" },
        { name:"금 손",               condition:"장비 합성 10회 성공(등급업)" },
        { name:"레전더리",            condition:"전설 장비 획득" },
        { name:"차원의 지배자",       condition:"차원의 공간 100%" },
        { name:"다이아 갑부",         condition:"누적 1,000만 다이아" },
        { name:"이등병",              condition:"모든 골드 훈련 완료" },
        { name:"리뷰어",              condition:"별점 주기 30회 이상" },
        { name:"이장님",              condition:"고양이 회관 30레벨" },
        { name:"보물찾기 1/2",        condition:"히든 트로피 10/15개" },
        { name:"Top 100~1",           condition:"스테이지 랭킹 달성" },
        { name:"미니게임 고수",       condition:"퍼펙트 클리어 100회" },
        { name:"초보 연금술사",       condition:"연금술 10회 시도" },
        { name:"기분 나쁜 연금술사",  condition:"연금술 10회 실패" },
        { name:"기분 좋은 연금술사",  condition:"연금술 10회 성공" },
        { name:"정답이다, 연금술사",  condition:"연금술 50회 성공" },
    ],

    // 마법 아카데미 보상
    academyRewards: {
        "그려그려": [
            { situation:"NPC가 붓을 들고 고민한다",    left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"물감이 튀어있다",              left:"깃펜 4 ✅",    right:"깃펜 2" },
            { situation:"NPC가 진지한 표정이다",        left:"잉크 2",       right:"숙련 10 ✅" },
            { situation:"큰 캔버스가 세워져있다",       left:"깃펜 3 ✅",    right:"잉크 1" },
            { situation:"바닥에 낙서가 가득하다",       left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"색이 섞인 팔레트가 보인다",   left:"숙련 20",      right:"지혜 1 ✅" },
        ],
        "닌자": [
            { situation:"연막 수련장에서 검은 그림자",  left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"닌자가 갑자기 눈 앞에 나타남", left:"깃펜 4 ✅",    right:"잉크 2" },
            { situation:"바람이 불며 천이 흔들림",      left:"깃펜 3 ✅",    right:"잉크 1" },
            { situation:"조용한 공간에 발자국 소만",    left:"숙련 20 ✅",   right:"숙련 10" },
            { situation:"천장에서 닌자가 거꾸로 매달림",left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"벽에 수리검이 정확히 박혀있다",left:"깃펜 2",       right:"깃펜 4 ✅" },
        ],
        "블럭개": [
            { situation:"블럭이 와르르 무너졌다",       left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"알록달록한 블럭이 쌓여 있다",  left:"숙련 5 ✅",    right:"깃펜 2" },
            { situation:"무지개 블럭이 반짝인다",       left:"숙련 10",      right:"숙련 20 ✅" },
            { situation:"블럭이 일정한 리듬으로 떨어진다",left:"잉크 1",     right:"깃펜 4 ✅" },
            { situation:"블럭 위에 고양이 발자국",      left:"숙련 10 ✅",   right:"깃펜 2" },
            { situation:"블록을 다시 쌓는 NPC",         left:"잉크 2",       right:"지혜 1 ✅" },
        ],
        "기사현자": [
            { situation:"검이 땅에 꽂혀 있다",          left:"잉크 1",       right:"깃펜 3 ✅",         intimacy:25 },
            { situation:"갑옷이 햇빛에 반짝인다",       left:"깃펜 2",       right:"숙련 5 ✅",         intimacy:20 },
            { situation:"깃발이 펄럭인다",              left:"깃펜 4 ✅",    right:"잉크 3",           intimacy:20 },
            { situation:"갑옷을 정비중이다",            left:"깃펜 2",       right:"숙련 10 ✅",        intimacy:15 },
            { situation:"캣기사가 진지하게 선다",       left:"숙련 10 ✅",   right:"잉크 1",           intimacy:25 },
            { situation:"검을 들고 자세를 잡는다",      left:"발로르 표식 1 ✅", right:"?",            intimacy:30, special:true },
        ],
        "법사현자": [
            { situation:"책이 산처럼 쌓여있다",         left:"잉크 2",       right:"깃펜 4 ✅",         intimacy:20 },
            { situation:"현자가 책을 덮는다",           left:"깃펜 3",       right:"깃펜 4 ✅",         intimacy:20 },
            { situation:"현자가 별을 본다",             left:"잉크 1",       right:"깃펜 4 ✅",         intimacy:20 },
            { situation:"차 향이 은은하다",             left:"숙련 5",       right:"숙련 10 ✅",        intimacy:15 },
            { situation:"현자가 눈을 감고 있다",        left:"잉크 3",       right:"숙련 10 ✅",        intimacy:20 },
            { situation:"현자가 미소를 짓는다",         left:"알테리온 표식 1 ✅", right:"?",          intimacy:30, special:true },
        ],
    },

    // 과금 효율 추천
    paymentGuide: [
        {
            priority: 1,
            color: "red",
            title: "광고 제거",
            desc: "입장 비다 버프, 광고 쥐 등 쾌적한 게임을 위한 필수 요소입니다."
        },
        {
            priority: 2,
            color: "orange",
            title: "VIP 등급",
            desc: "초반엔 미미하지만 높아질수록 엄청난 효율! (풀매수 시 80만원↑, 돈값은 확실히 합니다)"
        },
        {
            priority: 3,
            color: "yellow",
            title: "각종 패스권",
            desc: "격전지, 고양이 마을, 도전의 탑, 미니게임 패스 등 가성비가 매우 좋습니다."
        },
        {
            priority: 4,
            color: "blue",
            title: "이벤트 패키지 / 타임딜",
            items: [
                "룬 소환: 99,000원 = 5,000장",
                "픽업 소환: 99,000원 = 4,000장",
                "신화 소환: 약 60만원 = 10,000장",
            ]
        },
    ],
};
