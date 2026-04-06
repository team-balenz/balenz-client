'use client';

import { defaultButton } from './defaultButton.css';

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
    <button className={defaultButton} onClick={onClick} disabled={disabled} type={type}>
      {label}
    </button>
  );
};

export default DefaultButton;
