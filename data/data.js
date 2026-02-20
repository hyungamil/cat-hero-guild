/**
 * 📂 위치: data 폴더 안
 * 📄 파일명: data.js
 * * [사용법] 
 * 1. 아래의 따옴표("") 안에 있는 글자들만 수정하면 사이트 전체에 반영됩니다.
 * 2. 실제 데이터(덱 정보 등)는 나중에 이 형식에 맞춰서 추가하시면 됩니다.
 */

// 1. 사이트 기본 설정
export const siteConfig = {
    title: "캣히어로 : 가이드 센터",
    author: "늑대벼리",
    version: "1.0.0"
};

// 2. 최강 덱 데이터 (예시)
export const deckData = {
    '1myth': [
        { title: "고양이 가성비 덱", desc: "초보자에게 추천하는 덱입니다." }
    ],
    '2myth': [
        { title: "해적 밸런스 덱", desc: "중급자용 효율적인 덱입니다." }
    ]
};

// 3. 레벨 보상 데이터 (예시)
export const rewardData = [
    { lv: 1, item: "동료 소환권 10장" },
    { lv: 2, item: "스킬 소환권 20장" }
];