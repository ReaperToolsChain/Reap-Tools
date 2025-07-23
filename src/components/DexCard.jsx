import styles from '../styles/Home.module.css';

const DexCard = ({ dex, volume, change }) => {
  return (
    <a href={dex.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.cardHeader}>
        {/* In a real app, you would use the logo from the public folder */}
        <div className={styles.logoPlaceholder}>{dex.name.charAt(0)}</div>
        <h2>{dex.name}</h2>
        <span className={`${styles.type} ${styles[dex.type]}`}>{dex.type}</span>
      </div>
      
      <p>{dex.description}</p>
      
      <div className={styles.volumeInfo}>
        <div>
          <span className={styles.label}>24h Volume:</span>
          <span className={styles.value}>{volume || 'Loading...'}</span>
        </div>
        {change && (
          <div>
            <span className={styles.label}>Change:</span>
            <span className={change.startsWith('+') ? styles.positive : styles.negative}>
              {change}
            </span>
          </div>
        )}
      </div>
    </a>
  );
};

export default DexCard;
