import logo from './logo.svg';
import './App.css';

function App() {

  function fullName(shaxa) {
    return shaxa.name + " " + shaxa.surname
  }

  const user = {
    name: "Shohrux",
    surname: "Meliboyev"
  }

  const shaxs = false

  return (
    <div className="App">
          <p>Hello {fullName(user)}</p>
          <p>{shaxs ? "Shohrux" : "Yusuf"}</p>
          
    </div>
  );
}

export default App;
