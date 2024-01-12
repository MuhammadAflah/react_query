import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SuperHeros from "./components/SuperHeros";
import RQSuperHeros from "./components/RQSuperHeros";
import Home from "./components/Home";
import RQSuperHeroSingle from "./components/RQSuperHeroSingle";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeros />} />
          <Route path="/" element={<Home />} />
          <Route path="/rq-super-heros/:id" element={<RQSuperHeroSingle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
