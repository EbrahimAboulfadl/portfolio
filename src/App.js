import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EbrahimAboulfadl/portfolio.git
// git push -u origin main
