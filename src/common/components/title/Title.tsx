import * as styles from './title.css';

/**
 * 타이틀 섹션 Props
 * @property {'default' | 'articleHeader' | 'articleSummary'} variant - 레이아웃 스타일 변형
 * - default : 기본 이념 페이지 섹션별 타이틀
 * - articleHeader : SCOPE 기사 상세 페이지 헤더 타이틀 (SCOPE/주제키워드)
 * - articleSummary : SCOPE 기사 상세 페이지 기사 요약 섹션 타이틀 (언론사명/기사제목)
 */
interface TitlePropTypes {
  subtitle: string;
  title: string;
  variant?: 'default' | 'articleHeader' | 'articleSummary';
}

const Title = ({ subtitle, title, variant = 'default' }: TitlePropTypes) => {
  return (
    <div className={styles.container({ variant })}>
      <h3 className={styles.subtitleStyle({ variant })}>{subtitle}</h3>
      <h1 className={styles.titleStyle({ variant })}>{title}</h1>
    </div>
  );
};

export default Title;
