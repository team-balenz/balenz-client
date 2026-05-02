'use client';

import * as styles from './linkDetailBody.css';
import DefaultButton from '@/common/components/defaultButton/DefaultButton';

interface LinkDetailBodyPropTypes {
  summary: string;
  articleUrl: string;
}

const LinkDetailBody = ({ summary, articleUrl }: LinkDetailBodyPropTypes) => {
  const handleOriginalArticleClick = () => {
    window.open(articleUrl, '_blank');
  };
  return (
    <div className={styles.container}>
      <div className={styles.summaryText}>{summary}</div>
      <div className={styles.buttonContainer}>
        <DefaultButton label="기사 원문 보기" onClick={handleOriginalArticleClick} />
      </div>
    </div>
  );
};

export default LinkDetailBody;
