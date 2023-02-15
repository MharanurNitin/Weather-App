import './App.css';
import Nav from "./components/Nav"
import Search from "./components/Search"; 
import Details from "./components/Details"; 
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Nav></Nav>
        <Search/>
        <Details/>
      </div>
    </div>
  );
}

export default App;
