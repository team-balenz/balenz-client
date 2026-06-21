import { color } from '@/shared/styles/color.css';
import { BaseFrameType } from '@/shared/types/frame';

import * as styles from './byIdeologyHeader.css';

interface ByIdeologyHeaderPropTypes {
  ideology: BaseFrameType;
}

const IDEOLOGY_MAPPING_TITLE = {
  VALUE: '진보 성향 기사',
  NEUTRAL: '중도 성향 기사',
  NORM: '보수 성향 기사',
} as const;

const IDEOLOGY_COLOR_THEME = {
  VALUE: color.brand.progressive,
  NEUTRAL: color.brand.center,
  NORM: color.brand.conservative,
} as const;

const ByIdeologyHeader = ({ ideology }: ByIdeologyHeaderPropTypes) => {
  return (
    <div className={styles.container} style={{ backgroundColor: IDEOLOGY_COLOR_THEME[ideology] }}>
      <p className={styles.title}>{IDEOLOGY_MAPPING_TITLE[ideology]}</p>
    </div>
  );
};

export default ByIdeologyHeader;
