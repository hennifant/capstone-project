import { useState, useEffect } from 'react';
import FishListPage from './pages/FishListPage.js';

function App() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getFishes();
  }, []);

  return (
    <div>
      <FishListPage fishes={fishes} />
    </div>
  );

  async function getFishes() {
    try {
      const response = await fetch('pisces.json');
      const data = await response.json();
      setFishes(data.fishes);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
}

export default App;
