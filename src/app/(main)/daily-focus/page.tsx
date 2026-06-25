import { MOCK_DAILY_FOCUS } from '@/mocks/data/dailyFocus';
import DailyFocusCard from './components/dailyFocusCard/DailyFocusCard';
import { DailyFocusCarousel } from './components/dailyFocusCarousel/DailyFocusCarousel';
import * as styles from './page.css';

export default function DailyFocusPage() {
  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.subtitle}>짧게 읽고, 관점은 넓게.</p>
        <h1 className={styles.title}>데일리 포커스</h1>
      </header>

      <DailyFocusCarousel>
        {MOCK_DAILY_FOCUS.articles.map((article) => (
          <DailyFocusCard key={article.id} data={article} />
        ))}
      </DailyFocusCarousel>
    </main>
  );
}
