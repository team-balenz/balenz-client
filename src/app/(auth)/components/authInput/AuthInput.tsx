import { InputHTMLAttributes, useId } from 'react';

import BaseInput from '@/shared/components/baseInput/BaseInput';
import * as styles from './authInput.css';

interface AuthInputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  showDuplicateCheck?: boolean;
  onDuplicateCheck?: () => void;
}

const AuthInput = ({
  id,
  label,
  errorMessage,
  showDuplicateCheck = false,
  onDuplicateCheck,
  type = 'text',
  ...props
}: AuthInputPropTypes) => {
  const fallbackId = useId();
  const inputId = id ?? fallbackId;
  return (
    <div className={styles.container}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <div className={styles.inputRow}>
        <BaseInput id={inputId} type={type} isError={!!errorMessage} {...props} />

        {showDuplicateCheck && (
          <button type="button" className={styles.duplicateButton} onClick={onDuplicateCheck}>
            중복 확인
          </button>
        )}
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default AuthInput;
