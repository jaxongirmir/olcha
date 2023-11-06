import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./router/product/Product";
import NotFound from "./router/notFound/NotFound";
import SingleRoute from "./router/singleRote/SingleRoute";
import { Routes, Route } from "react-router-dom";
import Form from "./router/form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="product/:id" element={<SingleRoute />} />
        <Route path="/signup" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
