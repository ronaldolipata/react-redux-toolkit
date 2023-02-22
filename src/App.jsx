import './App.css';
import Filter from './components/Filter';
import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Filter />
      <Products filterBy='' />
    </div>
  );
}

export default App;
