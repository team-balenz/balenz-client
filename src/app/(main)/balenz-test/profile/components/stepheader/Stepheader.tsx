import * as styles from './stepheader.css';

interface StepHeaderProps {
  section: string;
  title: string;
}

const StepHeader = ({ section, title }: StepHeaderProps) => {
  return (
    <header className={styles.container}>
      <p className={styles.section}>{section}</p>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default StepHeader;
