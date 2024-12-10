import { NavBarStyled } from "./NavBar.styled"
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/Koncepter">Koncepter</NavLink></li>
                <li><NavLink to="/about">Om os</NavLink></li>
                <li><NavLink to="/kontaktOs">Kontaks os</NavLink></li>
            </ul>
        </NavBarStyled>
    )
}

