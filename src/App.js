import Navbar from "./components/Navbar";
import "./styles/App.css";
import countries from "./data";
import Article from "./components/Article";

function App() {
  const countriesMapped = countries.map((country) => {
    return <Article key={country.id} {...country} />;
  });
  return (
    <div className="App">
      <Navbar />
      {countriesMapped}
    </div>
  );
}

export default App;
