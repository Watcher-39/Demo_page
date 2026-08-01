/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import ProductList from "../assets/productList";
import AdminList from "../assets/adminList";
import ProductForm from "../assets/productForm";
import AdminForm from "../assets/adminForm";
import "../App.css";

function Dash() {
    const [products, setProducts] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [currentAdmin, setCurrentAdmin] = useState({});

    useEffect(() => {
        fetchProducts();
        fetchAdmins();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch("http://127.0.0.1:5000/products");
        const data = await response.json();
        setProducts(data.products);
    };

    const fetchAdmins = async () => {
        const response = await fetch("http://127.0.0.1:5000/admins");
        const data = await response.json();
        setAdmins(data.admins);
    
        setAdmins(data.admins);
    };

    const closeModal = () => {
        setIsProductModalOpen(false);
        setIsAdminModalOpen(false);
        setCurrentProduct({});
        setCurrentAdmin({});
    };

    const openCreateProductModal = () => {
        if (!isProductModalOpen) setIsProductModalOpen(true);
    };

    const openCreateAdminModal = () => {
        if (!isAdminModalOpen) setIsAdminModalOpen(true);
    };

    const openEditProductModal = (product) => {
        if (isProductModalOpen) return;
        setCurrentProduct(product);
        setIsProductModalOpen(true);
    };

    const openEditAdminModal = (admin) => {
        if (isAdminModalOpen) return;
        setCurrentAdmin(admin);
        setIsAdminModalOpen(true);
    };

    const onUpdate = () => {
        closeModal();
        fetchProducts();
        fetchAdmins();
    };

    return (
        <>    
            <a className="back" href="/">&lt;Back</a>
            <ProductList
                products={products}
                updateProduct={openEditProductModal}
                updateCallback={onUpdate}
            />
            <button onClick={openCreateProductModal}>Create New Product</button>
            {isProductModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <ProductForm
                            existingProduct={currentProduct}
                            updateCallback={onUpdate}
                        />
                    </div>
                </div>
            )}

            <AdminList
                admins={admins}
                updateAdmin={openEditAdminModal}
                updateCallback={onUpdate}
            />
            <button onClick={openCreateAdminModal}>Create New Admin</button>
            {isAdminModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <AdminForm
                            existingAdmin={currentAdmin}
                            updateCallback={onUpdate}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

    export default Dash;
