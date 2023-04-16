import styles from './sheet.module.css';

interface PaperProps {
  title: string;
  children: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <span className={styles.cardTitle}>{title}</span>
      </header>
      <p className={styles.cardText}>{children}</p>
    </div>
  );
};

export default Paper; 