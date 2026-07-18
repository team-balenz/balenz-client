import type { LikertOptionData, LikertValue } from '../../types/likert';

import * as styles from './likertOption.css';

interface LikertOptionPropTypes {
  name: string;
  option: LikertOptionData;
  checked: boolean;
  onChange: (value: LikertValue) => void;
}

const LikertOption = ({ name, option, checked, onChange }: LikertOptionPropTypes) => {
  const inputId = `${name}-${option.value}`;

  return (
    <label htmlFor={inputId} className={styles.option}>
      <input
        id={inputId}
        className={styles.input}
        type="radio"
        name={name}
        value={option.value}
        checked={checked}
        onChange={() => onChange(option.value)}
      />

      <span className={styles.circleWrapper}>
        <span className={styles.circle({ size: option.size, selected: checked })} />
      </span>

      <span className={styles.label}>{option.label ?? ''}</span>
    </label>
  );
};

export default LikertOption;
