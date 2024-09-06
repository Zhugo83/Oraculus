import { Link } from "react-router-dom"
import logo from "../assets/logo-oraculus.png"
import "../styles/header.css"

function Header(){
    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo Oraculus" /></Link>
            <nav>
                <ul>
                    <li><Link className="active" to="/">Horoscope</Link></li>
                    <li><Link to="/">A propos</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>

            <div className="arrow">
                <Link className="arrow-left" to="/"><i className="fa-solid fa-chevron-left" /></Link>
                <Link className="arrow-right" to="/"><i className="fa-solid fa-chevron-right" /></Link>
            </div>
        </header>
    )
}

export default Header