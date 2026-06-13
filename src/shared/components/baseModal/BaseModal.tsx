'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './baseModal.css';

interface BaseModalPropTypes {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BaseModal = ({ children, open, onOpenChange }: BaseModalPropTypes) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.content}
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <Dialog.Title className={styles.hiddenTitle}>Modal</Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BaseModal;
