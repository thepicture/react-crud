import { useState } from 'react';
import './App.css';
import ItemsList from './routes/ItemsList';

function App() {
  const [items, setItems] = useState([
    {
      key: 1,
      name: "Item 1",
    },
    {
      key: 2,
      name: "Item 2",
    },
  ]);
  return (
    <div className="App">
      <ItemsList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
