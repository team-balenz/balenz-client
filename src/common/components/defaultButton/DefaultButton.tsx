'use client';

import * as styles from './defaultButton.css';

interface DefaultButtonPropTypes {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'auth';
}

const DefaultButton = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'default',
}: DefaultButtonPropTypes) => {
  return (
    <button
      className={styles.defaultButton({ variant })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
