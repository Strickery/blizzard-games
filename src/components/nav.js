import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/blizzlogo.png"
import {
    nav,
    navLinks,
    navLinkItem,
    navLinkText,
    image,
    navHead,
} from "./nav.module.css"

const Nav = () => {
    return (
        <nav className={nav}>
            <div className={navHead}>
                <Link className={image} to="/"><img src={logo} alt='logo' className={image}/></Link>
                <ul className={navLinks}>
                  <li className={navLinkItem}>
                    <Link className={navLinkText} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={navLinkItem}>
                    <Link className={navLinkText} to="/games">
                      Games
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav