import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import DexCard from '../components/DexCard';
import SearchBar from '../components/SearchBar';
import { DEX_LIST } from '../utils/dexData';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVolumeData = async () => {
      try {
        const response = await fetch('/api/volume');
        const data = await response.json();
        setVolumeData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVolumeData();
  }, []);

  const filteredDexes = DEX_LIST.filter(dex =>
    dex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Reap - Solana DEX Volume Checker</title>
        <meta name="description" content="Check trading volumes across Solana DEXs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>Solana DEX Volume Tracker</h1>
        
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        {loading ? (
          <div className={styles.loading}>Loading volume data...</div>
        ) : error ? (
          <div className={styles.error}>Error: {error}</div>
        ) : (
          <div className={styles.grid}>
            {filteredDexes.map(dex => {
              const dexVolume = volumeData.find(v => v.name === dex.name) || {};
              return (
                <DexCard 
                  key={dex.name}
                  dex={dex}
                  volume={dexVolume.volume}
                  change={dexVolume.change}
                />
              );
            })}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Reap - Solana DEX Analytics</p>
      </footer>
    </div>
  );
}
