import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Graphs from "./components/pages/Graphs";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Graphs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
