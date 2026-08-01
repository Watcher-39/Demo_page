import { Link } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import Footer from "../assets/footer.jsx";

function Modal({ openMenu, closeMenu, close }) {
    if (!openMenu) return null;

    return createPortal(
        <div
            className="menu-screen"
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact Us</Link>
            <div
                className="close-btn"
                style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    background: "none",
                }}
            >
                {close}
                <button onClick={closeMenu}>X</button>
            </div>
        </div>,
        document.body,
    );
}

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className="home">
                <button className="menu" onClick={() => setOpenMenu(true)}>
                    ☰
                </button>
                <Modal openMenu={openMenu} closeMenu={() => setOpenMenu(false)} />
                <div className="welcome">
                    <h1 className="intro">Welcome To</h1>
                    <h3>"Your Name Here"</h3>
                    <h6>How can I help you today?</h6>
                    <Link to="/first">1. First Category</Link>
                    <br />
                    <Link to="/second">2. Second Category</Link>
                    <br />
                    <Link to="/third">3. Third Category</Link>
                    <br />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;