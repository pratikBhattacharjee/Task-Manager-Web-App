import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

//Note we gotta write everything inside a single html element, ie div
function App() {
  const name = "Pratik";
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
