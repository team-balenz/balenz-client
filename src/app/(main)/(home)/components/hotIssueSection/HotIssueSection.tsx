import Title from '@/common/components/title/Title';
import { SECTION_TITLES } from '@/app/(main)/(home)/constants';
import { HOT_ISSUE_ARTICLE_GROUP } from '@/mocks/data/home';

import HotIssueGroup from './hotIssueGroup/HotIssueGroup';
import * as styles from './hotIssueSection.css';

const HotIssueSection = () => {
  return (
    <section className={styles.section}>
      <Title title={SECTION_TITLES.keyIssue.title} subtitle={SECTION_TITLES.keyIssue.subtitle} />
      <div className={styles.container}>
        {HOT_ISSUE_ARTICLE_GROUP.map((group) => (
          <HotIssueGroup
            key={group.keywordId}
            ideology={group.ideology}
            keyword={group.keyword}
            articleItems={group.articleItems}
          />
        ))}
      </div>
    </section>
  );
};

export default HotIssueSection;
