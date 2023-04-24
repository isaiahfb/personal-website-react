import Contact from "../components/Template/Contact";
import Experience from '../components/Programming/Experience'
import Skills from '../components/Programming/Skills'
import coverPhoto from '../assets/images/IMG_2057 copy.JPG'
import mailIcon from '../assets/images/mailicon.png'
import '../static/css/pages/programming.css'



function Programming() {
    return (
        <body>
            <div className="main">
                <div className="content">
                    <div className="intro">
                        <div className="title">
                            <h1>I'm a software developer.</h1>
                                
                            <h1>I can help build your project.</h1>
                        </div>  
                        <img id="cover-photo" src={coverPhoto} />
                        <div className="about-me">
                            <p>I'm passionate about creating projects that inspire, connect, and help people. 
                                    I have over six years of experience, including web development, Python, and teaching.
                            </p>

                            <p>I'm available for freelance work. I can provide web and 
                                software development as well as tutoring. 
                                Contact me with your project ideas, problems, or just to chat. 
                            </p>
                        </div>
                        <div className="email">
                            <a href = "mailto: isaiah.fujii@gmail.com"> 
                                <img id="mailicon" title="Message me" src={mailIcon} alt="Mail icon" />
                                <p>isaiah.fujii@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <Experience />
                    <Skills />
                    <Contact
                        message="Check out my work and reach out to me for freelance work or just to connect!"
                        include={['instagram', 'facebook', 'linkedin', 'github', 'resume']}
                    >
                    </Contact>
                </div>
            </div>
        </body>
    )
} 

export default Programming