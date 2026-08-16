/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import ProductList from "../assets/productList";
import ProductForm from "../assets/productForm";
import AdminList from "../assets/adminList";
import EmployeeList from "../assets/employeeList";
import EmployeeForm from "../assets/employeeForm";
import "../App.css";

function Dash() {
    const [products, setProducts] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [currentAdmin, setCurrentAdmin] = useState({});
    const [currentEmployee, setCurrentEmployee] = useState({});

    useEffect(() => {
        fetchProducts();
        fetchAdmins();
        fetchEmployees();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data.products);
    };

    const fetchAdmins = async () => {
        const response = await fetch("http://localhost:5000/admins");
        const data = await response.json();
        setAdmins(data.admins);
    
        setAdmins(data.admins);
    };

    const fetchEmployees = async () => {
        const response = await fetch("http://localhost:5000/employees");
        const data = await response.json();
        setEmployees(data.employees);
    
        setEmployees(data.employees);
    };

    const closeModal = () => {
        setIsProductModalOpen(false);
        setIsAdminModalOpen(false);
        setIsEmployeeModalOpen(false);
        setCurrentProduct({});
        setCurrentAdmin({});
        setCurrentEmployee({});
    };

    const openCreateProductModal = () => {
        if (!isProductModalOpen) setIsProductModalOpen(true);
    };

    const openCreateAdminModal = () => {
        if (!isAdminModalOpen) setIsAdminModalOpen(true);
    };
    const openCreateEmployeeModal = () => {
        if (!isEmployeeModalOpen) setIsEmployeeModalOpen(true);
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

    const openEditEmployeeModal = (employee) => {
        if (isEmployeeModalOpen) return;
        setCurrentEmployee(employee);
        setIsEmployeeModalOpen(true);
    };

    const onUpdate = () => {
        closeModal();
        fetchProducts();
        fetchAdmins();
        fetchEmployees();
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

            <EmployeeList
                employees={employees}
                updateEmployee={openEditEmployeeModal}
                updateCallback={onUpdate}
            />
            <button onClick={openCreateEmployeeModal}>Create New Employee</button>

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
