// 백신 조회 세션 별 안내 메시지 멘트

export const introMessages = {
  필수예방접종:
    '감염병의 예방 및 관리에 관한 법률을 통해 국가가 권장하는 예방접종이예요.',
  국가예방접종:
    '필수예방접종에 대해 국가에서 지정한 백신으로, 보건소와 지정의료기관에서 예방접종 비용을 지원하는 백신이예요.',
  기타예방접종:
    '국가예방접종 대상 백신 외에 의료기관에서 유료로 접종받을 수 있는 예방 접종이예요.',
};

export const vaccine = {
  국가예방접종:
    '필수예방접종에 대해 국가에서 지정한 백신으로, 보건소와 지정의료기관에서 예방접종 비용을 지원하는 백신이예요.',
  기타예방접종:
    '국가예방접종 대상 백신 외에 의료기관에서 유료로 접종받을 수 있는 예방 접종이예요.',
};

// 백신조회 필터 쪽 조건 목록
export const ageRanges = [
  '전체',
  '만 19-29세',
  '만 30-39세',
  '만 40-49세',
  '만 50-59세',
  '만 60-64세',
  '만 65세이상',
];

export const situationRanges = [
  '해당 없음',
  '당뇨병',
  '만성 심혈관질환',
  '만성 폐질환',
  '만성 신질환',
  '만성 간질',
  '항암 치료 중인 고형암',
  '이식 이외 면역억제제 사용',
  '장기이식',
  '조혈모 세포이식',
  '무비증',
  'HIV 감염: CD4<200/mm3',
  'HIV 감염: CD4≥200/mm3',
  '임신부',
  '의료기관 종사자',
];

// 통신사 목록
export const agencyRanges = [
  'SKT',
  'KT',
  'LG U+',
  'SKT 알뜰폰',
  'KT 알뜰폰',
  'LG U+ 알뜰폰',
];

// 접종내역 필터링을 위한 병명
export const nationDisease = [
  '전체',
  '결핵',
  'B형간염',
  '디프테리아·파상풍·백일해',
  '폴리오',
  'b형헤모필루스인플루엔자',
  '폐렴구균',
  '로타바이러스감염증',
  '홍역·유행성이하선염·풍진',
  '수두',
  'A형간염',
  '일본뇌염',
  '사람유두종바이러스감염증',
  '인플루엔자',
];
export const extraDisease = [
  '전체',
  '코로나19',
  '수막구균',
  '사람유두종바이러스감염증',
];
