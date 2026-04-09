'use client';

import * as styles from './defaultButton.css';

interface DefaultButtonPropTypes {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const DefaultButton = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
}: DefaultButtonPropTypes) => {
  return (
    <button className={styles.defaultButton} onClick={onClick} disabled={disabled} type={type}>
      {label}
    </button>
  );
};

export default DefaultButton;
