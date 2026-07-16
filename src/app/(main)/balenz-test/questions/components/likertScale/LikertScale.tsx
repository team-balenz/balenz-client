import { LIKERT_OPTIONS } from '../../constants/likertOption';
import type { LikertValue } from '../../types/likert';
import LikertOption from '../likertOption/LikertOption';

import * as styles from './likertScale.css';

interface LikertScalePropTypes {
  questionId: number | string;
  value?: LikertValue;
  onChange: (value: LikertValue) => void;
}

const LikertScale = ({ questionId, value, onChange }: LikertScalePropTypes) => {
  const inputName = `question-${questionId}`;

  return (
    <div className={styles.scale} role="radiogroup" aria-label="응답 선택">
      {LIKERT_OPTIONS.map((option) => (
        <LikertOption
          key={option.value}
          name={inputName}
          option={option}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default LikertScale;
