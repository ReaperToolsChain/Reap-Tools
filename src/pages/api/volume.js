import { DEX_LIST } from '../../utils/dexData';

// Simulated API that would normally fetch from real DEX APIs
export default async function handler(req, res) {
  try {
    // In a real app, you would fetch from each DEX's API here
    // This is a mock implementation for demonstration
    
    const mockVolumeData = DEX_LIST.map(dex => ({
      name: dex.name,
      volume: `$${(Math.random() * 1000000).toLocaleString('en-US', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      })}`,
      change: (Math.random() > 0.5 ? '+' : '-') + 
        Math.floor(Math.random() * 50) + '%'
    }));

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json(mockVolumeData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch volume data' });
  }
}
