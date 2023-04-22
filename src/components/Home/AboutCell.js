import { NavLink } from 'react-router-dom'
import '../../static/css/components/aboutcell.css'

function AboutCell({flexdirection, link, img, description}) {
    return (
        <div className={flexdirection+" about-cell"}>
            <NavLink to={link}>
                <img src={img} />
            </NavLink>
            <p>
                {description} 
            </p>
        </div>
    )
}

export default AboutCell