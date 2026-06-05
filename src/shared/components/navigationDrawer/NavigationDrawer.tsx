'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from '@/shared/components/header/constants';
import * as styles from './navigationDrawer.css';

interface NavigationDrawerPropTypes {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavigationDrawer = ({ open, onOpenChange }: NavigationDrawerPropTypes) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content id="mobile-menu" className={styles.drawer} aria-describedby={undefined}>
          <Dialog.Title className={styles.hiddenTitle}>모바일 네비게이션</Dialog.Title>

          <div className={styles.drawerHeader}>
            <Link href="/" aria-label="홈으로 이동" onClick={() => onOpenChange(false)}>
              <Image
                src="/logo/header_logo.svg"
                alt="balenz logo"
                className={styles.logoImage}
                width={167}
                height={24}
              />
            </Link>

            <Dialog.Close asChild>
              <button className={styles.closeButton} aria-label="메뉴 닫기">
                <Image src="/icons/ic_modal_close.svg" alt="" width={32} height={32} aria-hidden />
              </button>
            </Dialog.Close>
          </div>

          <nav className={styles.navWrapper} aria-label="모바일 네비게이션">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={styles.navItem}
                    onClick={() => onOpenChange(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Image
            src="/logo/reportmodal_logo.svg"
            alt=""
            className={styles.backgroundLogo}
            width={306}
            height={369}
            aria-hidden
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NavigationDrawer;
