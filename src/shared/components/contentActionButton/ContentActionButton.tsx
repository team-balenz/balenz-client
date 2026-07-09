import Image from 'next/image';
import type { ButtonHTMLAttributes } from 'react';

import * as styles from './contentActionButton.css';

interface ContentActionButtonPropTypes extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  iconSrc: string;
  label: string;
  variant?: keyof typeof styles.actionButton;
}

const ContentActionButton = ({
  iconSrc,
  label,
  variant = 'plain',
  type = 'button',
  ...buttonProps
}: ContentActionButtonPropTypes) => {
  return (
    <button type={type} className={styles.actionButton[variant]} {...buttonProps}>
      <Image className={styles.actionIcon[variant]} src={iconSrc} width={24} height={24} alt="" />
      <span className={styles.actionText[variant]}>{label}</span>
    </button>
  );
};

export default ContentActionButton;
