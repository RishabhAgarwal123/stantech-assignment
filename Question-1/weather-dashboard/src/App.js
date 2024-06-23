import './App.css';
import { SearchProvider } from './context/weatherContext';
import Search from './components/Search';
import Location from './components/Location';
import Weather from './components/Weather';

function App() {
  return (
    <SearchProvider>
      <Search />
      <div className="details">
        <Location />
        <Weather />
      </div>
    </SearchProvider>
  );
}

export default App;
