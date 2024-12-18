
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Homepage from '../src/homepage'


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
