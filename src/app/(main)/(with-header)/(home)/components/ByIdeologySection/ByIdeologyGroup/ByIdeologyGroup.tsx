import ArticlePreviewItem from '@/shared/components/articlePreviewItem/ArticlePreviewItem';

import ByIdeologyHeader from '../ByIdeologyHeader/ByIdeologyHeader';
import { type ByIdeologySectionGroupTypes } from '../../../types/byIdeologySection';

import * as styles from './byIdeologyGroup.css';

const ByIdeologyGroup = ({ ideology, articleItems }: ByIdeologySectionGroupTypes) => {
  return (
    <section>
      <ByIdeologyHeader ideology={ideology} />
      <div className={styles.list}>
        {articleItems.map((item) => (
          <div key={item.articleId} className={styles.articleItem}>
            <ArticlePreviewItem {...item} renderType="default" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ByIdeologyGroup;
