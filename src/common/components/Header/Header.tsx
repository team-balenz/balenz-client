'use client';

import {
  headerWrapper,
  logoSection,
  logoImage,
  navWrapper,
  navItem,
  rightSection,
  menuButton,
  searchButton,
} from './header.css';
import Image from 'next/image';
import { useState } from 'react';
import DefaultButton from '../DefaultButton/DefaultButton';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '이념 관점', href: '#' },
    { label: '글로벌 관점', href: '#' },
  ];

  return (
    <header className={headerWrapper}>
      {/* Logo */}
      <div className={logoSection}>
        <Image
          src="/logo/header_logo.svg"
          alt="balenz logo"
          className={logoImage}
          width={167}
          height={32}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className={navWrapper}>
        {navItems.map((item) => (
          <a key={item.label} className={navItem} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right Section: Search & Login */}
      <div className={rightSection}>
        {/* Menu Button (Tablet/Mobile) */}
        <button
          className={menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          ☰
        </button>

        {/* Search Button */}
        <button className={searchButton} aria-label="검색">
          🔍
        </button>

        {/* Login Button */}
        <DefaultButton label="로그인" />
      </div>
    </header>
  );
};

export default Header;
