import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar" id="navbar">
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/programming" activeClassName="active">Programming</NavLink>
                </li>
                <li>
                    <NavLink to="/running" activeClassName="active">Running</NavLink>
                </li>
                <li>
                    <NavLink to="/other" activeClassName="active">Other</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar