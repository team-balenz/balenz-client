import Image from 'next/image';
import * as styles from './emptyResult.css';

interface EmptyResultProps {
  searchKeyword?: string;
  resultType?: 'scope' | 'news';
}

const EmptyResult = ({ searchKeyword = '검색어', resultType = 'scope' }: EmptyResultProps) => {
  const resultLabel = resultType === 'scope' ? 'SCOPE이' : '기사가';

  return (
    <section className={styles.container}>
      <div className={styles.emptyIcon} aria-hidden="true">
        <Image
          src="/logo/watermark_logo.svg"
          alt=""
          width={98}
          height={98}
          className={styles.emptyLogo}
        />
      </div>

      <p className={styles.message}>{`"${searchKeyword}"에 대한 ${resultLabel} 없습니다.`}</p>

      <div className={styles.guideBox}>
        <h2 className={styles.guideTitle}>다르게 검색해보세요</h2>
        <ul className={styles.guideList}>
          <li>키워드 철자가 맞는지 확인해보세요.</li>
          <li>
            더 짧거나 일반적인 단어로 검색해보세요.
            <br className={styles.mobileLineBreak} /> (예: 반도체 수출 규제 &gt; 반도체)
          </li>
          <li>
            비슷한 키워드로 검색해보세요.
            <br className={styles.mobileLineBreak} /> (예: 주가 &gt; 증시, 코스피)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmptyResult;
