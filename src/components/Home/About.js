import AboutCell from "./AboutCell"
import '../../static/css/components/about.css'
import programmingPhoto from '../../assets/images/IMG_2057 copy.JPG'
import runningPhoto from '../../assets/images/IMG_1431 copy.JPG'
import otherPhoto from '../../assets/images/IMG_5345 copy.JPG'
import galleryPhoto from '../../assets/images/IMG_0762 copy.PNG'
import blogPhoto from '../../assets/images/IMG_1824.JPG'


function About() {

    const aboutInfo = [
        {
            id: 'programming',
            flexdirection: 'row',
            link: '/programming',
            img: programmingPhoto,
            description: "I'm a software developer and programmer with over eight years of programming experience, including web development, Python, and teaching. I love creating projects that inspire, connect, and help people. Check out what I do and if you like what you see I'm available for freelance work."
        },
        {
            id: 'running',
            flexdirection: 'row-reverse',
            link: '/running',
            img: runningPhoto,
            description: "I love running on trails, roads, the track, or any other surface. I love the process of improving and pushing my physical limits. Follow along my running journey."
        },
        {
            id: 'other',
            flexdirection: 'row',
            link: '/other',
            img: otherPhoto,
            description: "Some of my other interests are cycling, hiking, backpacking, singing, music, and photography. Check out what I've been up to!"
        },
        {
            id: 'gallery',
            flexdirection: 'row-reverse',
            link: '/gallery',
            img: galleryPhoto,
            description: "Take a look at pictures from some of the places I've been and things I've done. I love trying to capture the beautiful world that we live in, the amazing nature, the wonderful people, and the moments big and small.",
        },
        {
            id: 'blog',
            flexdirection: 'row',
            link: '/blog',
            img: blogPhoto,
            description: "Give my blog a read if you're interested in some of the things I'm up to and my thoughts!"
        },

    ]
    return (
        <div className="about-me">
            {aboutInfo.map((section) => 
                <AboutCell
                    key={section.id}
                    flexdirection={section.flexdirection}
                    link={section.link}
                    img={section.img}
                    description={section.description}
                >
                </AboutCell>
            )}
            
        </div>
    )
}

export default About