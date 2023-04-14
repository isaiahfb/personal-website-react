import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar" id="navbar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/programming">Programming</Link>
                </li>
                <li>
                    <Link to="/running">Running</Link>
                </li>
                <li>
                    <Link to="/outdoors">Outdoors</Link>
                </li>
                <li>
                    <Link to="/photography">Photography</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar