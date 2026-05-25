interface ShareKakaoParams {
  type: 'scope' | 'link';
  title: string;
  summary: string;
  url: string;
  imageUrl?: string;
}

export const shareKakao = ({ type, title, summary, url, imageUrl }: ShareKakaoParams) => {
  if (typeof window === 'undefined') return;

  // Kakao API 키 확인
  const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
  if (!kakaoJsKey) {
    console.error('NEXT_PUBLIC_KAKAO_JS_KEY가 설정되지 않았습니다.');
    return;
  }

  // Kakao SDK 로드 확인
  if (!window.Kakao) {
    console.error('Kakao SDK가 로드되지 않았습니다.');
    return;
  }

  try {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJsKey);
    }
  } catch (error) {
    console.error('Kakao 초기화 실패:', error);
    return;
  }

  // scope일 때만 이미지 포함
  const content =
    type === 'scope'
      ? {
          title,
          description: summary,
          imageUrl: imageUrl || `${window.location.origin}/images/default-share.png`,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        }
      : {
          title,
          description: summary,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        };

  try {
    // Share API 사용 (개발/배포 모두 가능)
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content,
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  } catch (error) {
    console.error('카카오 공유 실패:', error);
  }
};
