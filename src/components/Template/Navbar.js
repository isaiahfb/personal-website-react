import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar" id="navbar">
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
                    <NavLink to="/outdoors" activeClassName="active">Outdoors</NavLink>
                </li>
                <li>
                    <NavLink to="/photography" activeClassName="active">Photography</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar