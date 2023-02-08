import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <div className="header">
        <img src="https://www.seekpng.com/png/full/623-6234032_disney-white-disney-logo-png.png" alt="logo" className="logo"/>
            <nav className="c-header-nav">
                <ul>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/characters" className="link">Characters</Link>
                </ul>
            </nav>
        </div>
    );
}