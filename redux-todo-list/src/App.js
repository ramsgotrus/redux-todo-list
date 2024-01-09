import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoEntry from "./components/TodoEntry";
import Todos from "./components/Todos";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/entry">Add todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/entry" element={<TodoEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
