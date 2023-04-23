import Cell from "../Template/Cell"
import hmcIcon from '../../assets/images/HMC BGW RGB 150dpi.jpg'
import freelanceIcon from '../../assets/images/IMG_2057 copy.JPG'
import qualitestIcon from '../../assets/images/qualitestlogoedited.png'
import tutoringIcon from '../../assets/images/Profile Photo.jpg'
import websiteIcon from '../../assets/images/website.png'
import flowerfinderIcon from '../../assets/images/IMG_1996 edited.JPG'
import focusstackIcon from '../../assets/images/focusstack.png'
import '../../static/css/components/experience.css'

function Experience() {
    
    const experienceData = [
        {
            id: 'education',
            img: hmcIcon,
            description: "I graduated from Harvey Mudd College in May 2020 with a B.S. in Computer Science with a Humanities, Arts, and Social Sciences concentration in Music. I spent my four years jamming out with Claremont Shades A Cappella, leading the Claremont Colleges Swing Dance Club, and exploring the beautiful southern California mountains and deserts."

        },
        {
            id: 'freelance',
            img: freelanceIcon,
            description: "I am a freelance full stack developer building web applications and website using tools such as JavaScript, HTML/CSS, ReactJS, NodeJS, WordPress, and PHP."
        },
        {
            id: 'qualitest',
            img: qualitestIcon,
            description: "I worked as a Quality Engineer for Qaulitest suppoting Google on the Search Langauge Specialist team from August 2020 to July 2022. I provided native language expertise as a Japanese and English bilingual engineer as part of a multiingual team to optimize and improve Google's search engine results and UI. I also provided data analysis and automation using Python, SQL, Google Apps Script and other tools to increase the efficiency of our workflows."
        },
        {
            id: 'tutoring',
            img: tutoringIcon,
            description: "I have over nine years of tutoring experience, through nonprofits and private and peer tutoring, one-on-one and in groups, and working with elementary through college age students. I have tutored in a wide range of subjects including computer science to first time programmers and for college level courses. I love helping others learn and see them excited about programming!"
        }
    ]
    const projectData = [
        {
            id: 'personal-website',
            img: websiteIcon,
            description: "I created my personal website to share who I am and some of my technical skills. The website was initially built as a static site with HTML, CSS, and JavaScript, while the current version is built with React. is currently built with using HTML, CSS, and JavaScript."
        },
        {
            id: 'flower-finder',
            img: flowerfinderIcon,
            description: "As a class project in spring 2019 my team created a web application that identifies flowers based on an image. The app was implemented with HTMl, CSS, and JavaScript on the frontend and Python and Flask on the backend using a pre-trained ResNet machine learning model."
        },
        {
            id: 'focusstack',
            img: focusstackIcon,
            description: "As a final project for a computational photography class in spring 2020, I implemented a focus stacking algorithm in Python utilizing the OpenCV library. Focus stacking is an image processing technique in which a set of images with different focus distnaces are combined to created a single image with a greater depth of field."
        }
    ]
    return (
        <div className="experience">
            <h1>Things I've Done</h1>
            {experienceData.map((experience) => 
                <Cell
                    key={experience.id}
                    id={experience.id}
                    img={experience.img}
                    description={experience.description}
                >
                </Cell>
            )}
            <h1>Things I've Built</h1>
            {projectData.map((project) => 
                <Cell
                    key={project.id}
                    id={project.id}
                    img={project.img}
                    description={project.description}
                >
                </Cell>
            )}
        </div>
    )
}

export default Experience