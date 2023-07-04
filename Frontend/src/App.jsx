
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () =>{
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/Products/:category">
                    <ProductList/>
                </Route>

                <Route path="/Product/:id">
                    <Product/>
                </Route>

                <Route path="/cart">
                    <Cart/>
                </Route>

                <Route path="/login">
                    {user ? <Redirect to= "/"/> : <Login/>}
                </Route>

                <Route path="/register">
                    {user ? <Redirect to= "/"/> : <Register/>}

                </Route>

            </Switch>
        </Router>
    );
};

export default App;