import { color } from '@/shared/styles/color.css';
import { BaseFrameType } from '@/shared/types/frame';

import * as styles from './byIdeologyHeader.css';

interface ByIdeologyHeaderPropTypes {
  ideology: BaseFrameType;
}

const IDEOLOGY_MAPPING_TITLE = {
  progressive: '진보 성향 기사',
  center: '중도 성향 기사',
  conservative: '보수 성향 기사',
} as const;

const IDEOLOGY_COLOR_THEME = {
  progressive: color.brand.progressive,
  center: color.brand.center,
  conservative: color.brand.conservative,
} as const;

const ByIdeologyHeader = ({ ideology }: ByIdeologyHeaderPropTypes) => {
  const headerColor = IDEOLOGY_COLOR_THEME[ideology] ?? IDEOLOGY_COLOR_THEME.center;

  return (
    <div className={styles.container} style={{ backgroundColor: headerColor }}>
      <p className={styles.title}>
        {IDEOLOGY_MAPPING_TITLE[ideology] ?? IDEOLOGY_MAPPING_TITLE.center}
      </p>
    </div>
  );
};

export default ByIdeologyHeader;
