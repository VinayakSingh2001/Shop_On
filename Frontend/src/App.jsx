
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";




const App = () =>{
    const user = true
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/products/:category" element={<ProductList/>} />
            </Routes>
        </Router>
    );
};

export default App;