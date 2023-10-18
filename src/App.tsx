import './App.css';
import { Route, Routes } from 'react-router-dom';
import Errorpage from './pages/ErrorPage/Error';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signin' element={<div>hello</div>} />
      <Route path='/login' element={<div>login page</div>} />
      <Route path='/cart' element={<div>my cart</div>} />
      <Route path='/products' element={<div>all Product</div>} />
      <Route path='/products/:id' element={<div>details of one products</div>} />
      <Route path='/waredrobe' element={<div>people suggest the new pairing option waredrobes</div>} />
      <Route path='*' element={<Errorpage />} />
    </Routes>
  );
}

export default App;
