import * as styles from './ideologyIndicator.css';
import { IDEOLOGY_OPTIONS, type IdeologyIndicatorValueTypes } from './constants';
import { type IdeologyIndicatorResponsiveSizeTypes } from './types';

interface IdeologyIndicatorPropTypes {
  value: IdeologyIndicatorValueTypes;
  size?: IdeologyIndicatorResponsiveSizeTypes;
}

// 기본 사이즈 설정
const DEFAULT_SIZE = {
  desktop: 'medium',
} as const;

const IdeologyIndicator = ({ value, size }: IdeologyIndicatorPropTypes) => {
  // 사이즈 기본값 설정 (size가 없으면 기본값 사용)
  const desktopSize = size?.desktop ?? DEFAULT_SIZE.desktop;
  const tabletSize = size?.tablet ?? desktopSize;
  const mobileSize = size?.mobile ?? tabletSize;

  return (
    <div className={styles.container}>
      {IDEOLOGY_OPTIONS.map((item) => {
        const isActive = item.value === value;

        return (
          <div
            key={item.value}
            className={[
              styles.item({
                active: isActive,
                tone: item.value,
              }),
              styles.desktopSize[desktopSize],
              styles.tabletSize[tabletSize],
              styles.mobileSize[mobileSize],
            ].join(' ')}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default IdeologyIndicator;
