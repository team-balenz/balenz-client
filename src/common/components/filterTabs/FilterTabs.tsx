import * as styles from './filterTabs.css';

interface FilterTabItem {
  key: string;
  label: string;
  mobileLabel?: string;
}

interface FilterTabsPropTypes {
  tabs: FilterTabItem[];
  activeKey: string;
  onChange: (id: string) => void;
  variant?: 'category' | 'ideology';
}

const FilterTabs = ({ tabs, activeKey, onChange, variant = 'category' }: FilterTabsPropTypes) => {
  return (
    <div className={styles.container} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={tab.key === activeKey}
          className={`${styles.tab({ variant })} ${tab.key === activeKey ? styles.activeTab : ''}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.mobileLabel && (
            <>
              <span className={styles.desktopLabel}>{tab.label}</span>
              <span className={styles.mobileLabel}>{tab.mobileLabel}</span>
            </>
          )}
          {!tab.mobileLabel && tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
