import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import ProductList from './component/ProductList';
import DetailsPage from './DetailsPage';
import Search from "./search";

function App() {
  return (

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/products/:id" element={<DetailsPage />} />

      </Routes>

      

    
 

 
  );
}

export default App;
