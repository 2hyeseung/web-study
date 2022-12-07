import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Notfound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./styles/Common.scss";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        );
        setProducts(res.data.slice(0, 10));
    };
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route
                        path="/products"
                        element={
                            <ProductPage products={products}></ProductPage>
                        }
                    ></Route>
                    <Route
                        path="/product/:productId"
                        element={
                            <ProductDetailPage
                                products={products}
                            ></ProductDetailPage>
                        }
                    ></Route>
                    <Route path="*" element={<Notfound></Notfound>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
