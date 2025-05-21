import './App.css';
import Card from './card';

function App() {
  const cardsData = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default App;
