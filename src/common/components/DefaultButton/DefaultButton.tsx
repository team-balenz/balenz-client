'use client';

import { defaultButton } from './defaultButton.css';

interface DefaultButtonPropTypes {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const DefaultButton = ({ label, onClick, disabled = false }: DefaultButtonPropTypes) => {
  return (
    <button className={defaultButton} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default DefaultButton;
