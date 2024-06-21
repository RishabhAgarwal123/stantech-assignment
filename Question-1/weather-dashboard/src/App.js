import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/themeContext';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
