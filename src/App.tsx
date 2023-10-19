import "./App.css";
import { Route, Routes } from "react-router-dom";
import Errorpage from "./pages/ErrorPage/Error";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/authpages/Login";
import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<div>hello</div>} />

      <Route path="/" element={<HomeLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/products" element={<div>all Product</div>} />
      </Route>

      <Route path="/cart" element={<div>my cart</div>} />
      <Route
        path="/products/:id"
        element={<div>details of one products</div>}
      />
      <Route
        path="/waredrobe"
        element={<div>people suggest the new pairing option waredrobes</div>}
      />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default App;
