import Navbar from './Navbar';
import Home from './Home';

function App() {
  const link = "https://dominicguo.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <a href={ link }>Hi it's Dominic's Site</a>


      </div>
    </div>
  );
}

export default App;
