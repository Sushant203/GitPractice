import "./App.css";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Homepage from '../src/homepage'
function App() {
  return (
    <>
      <h1 className="text-2xl">hello</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
