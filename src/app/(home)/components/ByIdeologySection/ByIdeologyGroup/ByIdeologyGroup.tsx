import * as styles from './byIdeologyGroup.css';
import ByIdeologyHeader from '../ByIdeologyHeader/ByIdeologyHeader';
import ArticlePreviewItem from '@/shared/components/articlePreviewItem/ArticlePreviewItem';
import { type ByIdeologySectionGroupTypes } from '../../../types/byIdeologySection';

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
