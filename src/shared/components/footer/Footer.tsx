import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import {
  BUSINESS_INFO,
  COPYRIGHT,
  FOOTER_LOGO,
  NOTICE_LINES,
  POLICY_LINKS,
  SOCIAL_LINKS,
} from './constants';
import * as styles from './footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>발렌즈 사업자 정보</h2>

          <div className={styles.infoSection}>
            <div className={styles.businessInfo}>
              {BUSINESS_INFO.map(({ label, value }) => (
                <div key={label} className={styles.infoRow}>
                  <p>{label}</p>
                  <p>{value}</p>
                </div>
              ))}

              <div className={styles.policyInfoRow} aria-label="서비스 정책">
                {POLICY_LINKS.map(({ label, href }, index) => (
                  <Fragment key={label}>
                    {index > 0 && <span aria-hidden="true">|</span>}
                    <Link href={href}>{label}</Link>
                  </Fragment>
                ))}
              </div>
            </div>

            <section className={styles.noticeSection}>
              <p className={styles.noticeText}>
                {NOTICE_LINES.map((line, index) => (
                  <span
                    key={line}
                    className={
                      index === NOTICE_LINES.length - 1 ? styles.noticeParagraph : undefined
                    }
                  >
                    {index > 0 && (
                      <>
                        <br className={styles.noticeBreak} />{' '}
                      </>
                    )}
                    {line}
                  </span>
                ))}
              </p>

              <p className={styles.copyright}>{COPYRIGHT}</p>
            </section>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <Link href="/" aria-label="발렌즈 홈으로 이동">
            <Image
              src={FOOTER_LOGO.src}
              alt={FOOTER_LOGO.alt}
              width={FOOTER_LOGO.width}
              height={FOOTER_LOGO.height}
              className={styles.logo}
            />
          </Link>

          <nav className={styles.socialLinks} aria-label="발렌즈 소셜 링크">
            {SOCIAL_LINKS.map(({ href, ariaLabel, iconSrc, iconSize, iconType, openInNewTab }) => (
              <a
                key={ariaLabel}
                href={href}
                target={openInNewTab ? '_blank' : undefined}
                rel={openInNewTab ? 'noopener noreferrer' : undefined}
                className={styles.socialLink}
                aria-label={ariaLabel}
              >
                <Image
                  src={iconSrc}
                  alt=""
                  width={iconSize}
                  height={iconSize}
                  className={iconType === 'mail' ? styles.mailIcon : styles.socialIcon}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
