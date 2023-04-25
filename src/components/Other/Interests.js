import Cell from '../Template/Cell'
import fmgIcon from '../../assets/images/IMG_5243.JPG'
import bikingIcon from '../../assets/images/IMG_5772.JPG'
import hikingIcon from '../../assets/images/IMG_2243.jpg'
import musicIcon from '../../assets/images/79675669_10156516455102155_5484521190854754304_n.jpg'
import photographyIcon from '../../assets/images/IMG_0762 copy.PNG'
import '../../static/css/components/interests.css'

function Interests() {

    const interestsData = [
        {
            id: 'biking',
            img: bikingIcon,
            description: "I love cycling, especially doing long rides and climbing big hills! One of my favorite experiences was bike touring in August 2019, cycling 400 miles over 5 days from Tokyo to Joetsu to Niigata to Sado Island. I loved every minute of it, from the beautiful rivers and coastlines, the long climbs and epic descents through the mountains, and the super friendly and helpful people!"
        },
        {
            id: 'hiking',
            img: hikingIcon,
            description: "If I'm not running, I love hiking and backpacking as well. Some of my favorite experiences are backpacking the Loowit trail around Mt St. Helens, visiting the Mighty 5 National Parks in Utah, and hiking in the deserts of Southern California."
        },
        {
            id: "fmg",
            img: fmgIcon,
            description: "During the summer of 2019, I worked as a bilingual guide for Fuji Mountain Guides leading international guests on one- and two-day trips to the summit of Mount Fuji. Getting to work with amazing guides, meet so many interesting guests, and climb this iconic mountain many times made for one of the most fun and rewarding summers of my life!"
        },
        {
            id: 'music',
            img: musicIcon,
            description: "I love music and have been singing for many years! I sang in choirs in high school and college, and also sang with the Claremont Shades A Cappella group during college, and had the opportunity to practice, perform, and compete in many settings!"
        },
        {
            id: 'photography',
            img: photographyIcon,
            description: "I really like taking pictures of places I visit and trying to get better at capturing its beauty. Take a look at some of my pictures in my gallery!"
        }
    ]

    return (
        <div className="interests">
            <h1>Some Things I Do </h1>
            {interestsData.map((interest) => 
                <Cell
                    key={interest.id}
                    id={interest.id}
                    img={interest.img}
                    description={interest.description}
                >
                </Cell>
            )}
        </div>
    )
}

export default Interests