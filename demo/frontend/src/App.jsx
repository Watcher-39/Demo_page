import "./App.css";
import Home from "./pages/home.jsx";
import Third from "./pages/third.jsx";
import First from "./pages/first.jsx";
import Second from "./pages/second.jsx";
import Login from "./pages/login.jsx";
import Dash from "./pages/dash.jsx";
import AdminForm from "./assets/adminForm.jsx";
import ProductForm from "./assets/productForm.jsx";
import ProductList from "./assets/productList.jsx";
import AdminList from "./assets/adminList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/first" element={<First />} />
                    <Route path="/second" element={<Second />} />
                    <Route path="/third" element={<Third />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dash />} /> 
                    <Route path="/productList" element={<ProductList />} />
                    <Route path="/adminList" element={<AdminList />} />
                    <Route path="/adminForm" element={<AdminForm />} />
                    <Route path="/productForm" element={<ProductForm />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;