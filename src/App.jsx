import "./App.css";
import BookNow from "./components/BookNow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/homepage";
import Layout from "./Navigation/Layout";
import AboutPage from "./pages/AboutPage";
import Services from "./services"
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
