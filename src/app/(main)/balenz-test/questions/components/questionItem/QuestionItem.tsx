import type { LikertValue } from '../../types/likert';
import LikertScale from '../likertScale/LikertScale';

import * as styles from './questionItem.css';

interface QuestionItemPropTypes {
  questionId: number | string;
  question: string;
  value?: LikertValue;
  onChange: (questionId: number | string, value: LikertValue) => void;
}

const QuestionItem = ({ questionId, question, value, onChange }: QuestionItemPropTypes) => {
  const handleChange = (selectedValue: LikertValue) => {
    onChange(questionId, selectedValue);
  };

  return (
    <fieldset className={styles.container}>
      <legend className={styles.question}>{question}</legend>

      <LikertScale questionId={questionId} value={value} onChange={handleChange} />
    </fieldset>
  );
};

export default QuestionItem;
