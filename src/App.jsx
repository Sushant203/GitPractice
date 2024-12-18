

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Homepage from '../src/homepage'
import "./App.css";
import Layout from "./Navigation/Layout";
function App() {
  return (
    <>
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
      </Layout>

    </>
  );
}

export default App;
