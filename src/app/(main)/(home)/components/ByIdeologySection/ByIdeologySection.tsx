'use client';

import { useState } from 'react';

import { BY_IDEOLOGY_CATEGORY_TABS, SECTION_TITLES } from '@/app/(main)/(home)/constants';
import FilterTabs from '@/common/components/filterTabs/FilterTabs';
import Title from '@/common/components/title/Title';
import { BY_IDEOLOGY_SECTION_DATA } from '@/mocks/data/home';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

import ByIdeologyGroup from './ByIdeologyGroup/ByIdeologyGroup';
import * as styles from './byIdeologySection.css';

const ByIdeologySection = () => {
  const [activeKey, setActiveKey] = useState<string>('progressive');

  const isMobile = useMediaQuery() === 'mobile';

  const filteredItems = isMobile
    ? BY_IDEOLOGY_SECTION_DATA.filter((item) => item.ideology === activeKey)
    : BY_IDEOLOGY_SECTION_DATA;

  const onFilterChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <section className={styles.section}>
      <Title
        title={SECTION_TITLES.ideologyArticle.title}
        subtitle={SECTION_TITLES.ideologyArticle.subtitle}
      />
      <div className={styles.filterTabsWrapper}>
        <FilterTabs
          tabs={BY_IDEOLOGY_CATEGORY_TABS}
          activeKey={activeKey}
          onChange={onFilterChange}
          variant="byIdeology"
        />
      </div>
      <div className={styles.container}>
        {filteredItems.map((item) => (
          <ByIdeologyGroup
            key={item.ideology}
            ideology={item.ideology}
            articleItems={item.articleItems}
          />
        ))}
      </div>
    </section>
  );
};

export default ByIdeologySection;
