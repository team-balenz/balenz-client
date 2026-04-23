import Title from '@/common/components/title/Title';
import { SECTION_TITLES } from '@/app/(home)/constants';
import { HOT_ARTICLE_GROUP } from '@/mocks/data/home';

import HotArticleGroup from './hotArticleGroup/HotArticleGroup';
import * as styles from './hotArticleSection.css';

const HotArticleSection = () => {
  return (
    <section className={styles.section}>
      {/* mobile only */}
      <div className={styles.mobileSectionTitle}>
        <Title
          subtitle={SECTION_TITLES.hotArticle.subtitle}
          title={SECTION_TITLES.hotArticle.title}
        />
      </div>

      <div className={styles.container}>
        {/* tablet only */}
        <h2 className={styles.tabletSectionTitle}>관심 기사</h2>

        <div className={styles.groups}>
          {HOT_ARTICLE_GROUP.map((group) => (
            <div key={group.ideology} className={styles.groupItem}>
              <HotArticleGroup ideology={group.ideology} articleItems={group.articleItems} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotArticleSection;
