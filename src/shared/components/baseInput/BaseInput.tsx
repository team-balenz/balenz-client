import { InputHTMLAttributes, ReactNode } from 'react';

import * as styles from './baseInput.css';

interface BaseInputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  rightElement?: ReactNode;
  isError?: boolean;
}

const BaseInput = ({
  rightElement,
  isError = false,
  type = 'text',
  className,
  ...props
}: BaseInputPropTypes) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        className={`${styles.input} ${rightElement ? styles.inputWithRightElement : ''} ${
          isError ? styles.errorInput : ''
        } ${className ?? ''}`}
        {...props}
      />

      {rightElement && <div className={styles.rightElementWrapper}>{rightElement}</div>}
    </div>
  );
};

export default BaseInput;
