export {};

declare global {
  interface Window {
    Kakao?: KakaoSDK;
  }
}

interface KakaoSDK {
  init: (appKey: string) => void;
  isInitialized: () => boolean;

  Share: {
    sendDefault: (options: KakaoShareOptions) => void;
  };
}

interface KakaoShareOptions {
  objectType: 'feed';

  content: {
    title: string;
    description: string;

    // scope일 때만 사용
    imageUrl?: string;

    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };

  buttons?: {
    title: string;

    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }[];
}
