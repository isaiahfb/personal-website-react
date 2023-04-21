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
        <nav class="navbar responsive" id="myNavbar">
            { isOpen ? 
                <GoX 
                    class="menuicon material-icons" 
                    onClick={handleClick}
                    >
                </GoX> :
                <GiHamburgerMenu 
                    class="menuicon material-icons"
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
                        <NavLink to="/outdoors" activeClassName="active" onClick={handleClick}>Outdoors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photography" activeClassName="active" onClick={handleClick}>Photography</NavLink>
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