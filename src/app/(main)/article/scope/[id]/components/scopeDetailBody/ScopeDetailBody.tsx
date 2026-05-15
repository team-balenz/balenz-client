import * as style from './scopeDetailBody.css';
import ReportSummarySection from '@/app/(main)/article/components/reportSummarySection/ReportSummarySection';

interface ScopeDetailBodyArticleCountTypes {
  neutral: number;
  neutralRatio: number;
  norm: number;
  normRatio: number;
  value: number;
  valueRatio: number;
}

interface ScopeDetailBodyPropTypes {
  keywordName: string;
  keywordSummary: string;
  articleCount: ScopeDetailBodyArticleCountTypes;
  bias: number;
  dominantFrameType: string;
}

const ScopeDetailBody = ({
  keywordName,
  keywordSummary,
  articleCount,
  bias,
  dominantFrameType,
}: ScopeDetailBodyPropTypes) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{keywordName}에 대해 발렌즈가 요약했습니다.</div>
      <div className={style.articleCount}>
        <ReportSummarySection
          articleCount={articleCount}
          bias={bias}
          dominantFrameType={dominantFrameType}
        />
      </div>
      <div className={style.content}>{keywordSummary}</div>
    </div>
  );
};

export default ScopeDetailBody;
