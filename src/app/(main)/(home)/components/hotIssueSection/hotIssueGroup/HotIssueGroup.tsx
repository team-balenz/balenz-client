import {
  type HotIssueGroupTypes,
  type HotIssueArticleItemTypes,
} from '@/app/(home)/types/hotIssueSection';

import HotIssueHeader from '../hotIssueHeader/HotIssueHeader';
import HotIssueArticleItem from '../hotIssueArticleItem/HotIssueArticleItem';

import * as styles from './hotIssueGroup.css';

interface HotIssueGroupPropTypes {
  ideology: HotIssueGroupTypes['ideology'];
  keyword: string;
  articleItems: HotIssueArticleItemTypes[];
}

const HotIssueGroup = ({ ideology, keyword, articleItems }: HotIssueGroupPropTypes) => {
  return (
    <section className={styles.group}>
      <HotIssueHeader ideology={ideology} keyword={keyword} />
      <div className={styles.container}>
        {articleItems.map((item) => (
          <HotIssueArticleItem key={item.articleId} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HotIssueGroup;
