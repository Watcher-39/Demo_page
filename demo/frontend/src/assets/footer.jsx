import { Link } from "react-router-dom";

const Footer = () => {
    return <>
        <section className="footer">
            <ul className="Links">
                <h3>Quick Links</h3>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Login</Link></li>
                <li><Link to="/products">Contact Us</Link></li>
            </ul>
            <ul className="Links">
                <h3>Follow Us</h3>
                <li><Link to="https://facebook.com">Facebook</Link></li>
                <li><Link to="https://twitter.com">Twitter</Link></li>
                <li><Link to="https://instagram.com">Instagram</Link></li>
            </ul>
            <ul className="Links">
                <h3>Legal</h3>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
        </section>
    </>
}

export default Footer;