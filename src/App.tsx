import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Landing page</div>} />
      <Route path='/signin' element={<div>hello</div>} />
      <Route path='/login' element={<div>hello</div>} />
      <Route path='/cart' element={<div>my cart</div>} />
      <Route path='/products' element={<div>all Product</div>} />
      <Route path='/products/:id' element={<div>details of one products</div>} />
      <Route path='/waredrobe' element={<div>people suggest the new pairing option waredrobes</div>} />
      <Route path='*' element={<div>404 page not found got to home page</div>} />
    </Routes>
  );
}

export default App;
