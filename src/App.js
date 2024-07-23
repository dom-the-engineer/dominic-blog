import './App.css';

function App() {
  const title = 'Welcome to the Dominics blog';
  const likes = 50;
  const link = "https://dominicguo.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "hello, lovely people" }</p>
        <p>{ [1,2,3,4,5,6] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link }>Dominic Site</a>


      </div>
    </div>
  );
}

export default App;
