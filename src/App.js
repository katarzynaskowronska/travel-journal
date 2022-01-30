import './index.css';
import Card from "./components/Card.js"
import data from "./data.js"

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
