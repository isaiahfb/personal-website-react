import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoX } from 'react-icons/go'

function Hamburger () {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar responsive" id="myNavbar">
            { isOpen ? 
                <GoX 
                    className="menuicon material-icons" 
                    onClick={handleClick}
                    >
                </GoX> :
                <GiHamburgerMenu 
                    className="menuicon material-icons"
                    onClick={handleClick}
                    >
                </GiHamburgerMenu>
                }
            {isOpen &&  
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/programming" activeClassName="active" onClick={handleClick}>Programming</NavLink>
                    </li>
                    <li>
                        <NavLink to="/running" activeClassName="active" onClick={handleClick}>Running</NavLink>
                    </li>
                    <li>
                        <NavLink to="/other" activeClassName="active" onClick={handleClick}>Other</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" activeClassName="active" onClick={handleClick}>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active" onClick={handleClick}>Blog</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Hamburger