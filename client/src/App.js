import { Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
