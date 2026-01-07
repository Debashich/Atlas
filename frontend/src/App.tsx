import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {

  return (
    <Router>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;
