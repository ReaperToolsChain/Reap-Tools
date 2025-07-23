import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Reap</h1>
        <p>Solana DEX Volume Analytics Tool</p>
      </div>
    </header>
  );
};

export default Header;
