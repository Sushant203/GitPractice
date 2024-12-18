import "./App.css";
import BookNow from "./components/BookNow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/homepage";
import Layout from "./Navigation/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
