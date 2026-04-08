'use client';

import * as styles from './header.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DefaultButton from '../defaultButton/DefaultButton';
import { NAV_ITEMS, ICONS } from './constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.headerWrapper}>
      {/* Logo */}
      <Link href="/" aria-label="홈으로 이동">
        <Image
          src="/logo/header_logo.svg"
          alt="balenz logo"
          className={styles.logoImage}
          width={167}
          height={32}
        />
      </Link>

      {/* Desktop,Tablet Navigation */}
      <nav className={styles.navWrapper}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            className={styles.navItem({ isActive: pathname === item.href })}
            href={item.href}
            aria-label={`${item.label} 페이지로 이동`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Section: Search & Login */}
      <div className={styles.rightSection}>
        {/* Icon Section */}
        <div className={styles.IconSection}>
          {/* Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="모바일 메뉴 활성화"
          >
            <Image src={ICONS.menu} alt="menu" width={40} height={40} />
          </button>

          {/* Search Button */}
          <Link href="/search" className={styles.searchButton} aria-label="검색 페이지로 이동">
            <Image src={ICONS.search} alt="search" width={40} height={40} />
          </Link>
        </div>

        {/* Login Button */}
        <DefaultButton label="로그인" />
      </div>
    </header>
  );
};

export default Header;
