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
            
                    {/* <div class="skills">
                        <h1>My Skills</h1>
                        <div class="item" id="python">
                            <img src="../images/pUBY5pVj_normal.png">
                            <p>Python</p>
                        </div>
                        <div class="item" id="java">
                            <img src="../images/download-1.png">
                            <p>Java</p>
                        </div>
                        <div class="item" id="c++">
                            <img src="../images/cpp_logo.png">
                            <p>C++</p>
                        </div>
                        <div class="item" id="javascript">
                            <img src="../images/600px-JavaScript-logo.png">
                            <p>JavaScript</p>
                        </div>
                        <div class="item" id="html">
                            <img src="../images/512px-HTML5_logo_and_wordmark.svg.png">
                            <p>HTML</p>
                        </div>
                        <div class="item" id="css">
                            <img src="../images/CSS3_logo_and_wordmark.svg.png">
                            <p>CSS</p>
                        </div>
                        <div class="item" id="c">
                            <img src="../images/120px-The_C_Programming_Language_logo.svg.png">
                            <p>C</p>
                        </div>
                        <div class="item" id="r">
                            <img src="../images/Rlogo.png">
                            <p>R</p>
                        </div>
                        <div class="item" id="opencv">
                            <img src="../images/487px-OpenCV_Logo_with_text_svg_version.svg.png">
                            <p>OpenCV</p>
                        </div>
                        <div class="item" id="wordpress">
                            <img src="../images/WordPress-logotype-wmark.png">
                            <p>WordPress</p>
                        </div>
                        <div class="item" id="git">
                            <img src="../images/2color-lightbg@2x.png">
                            <p>Git</p>
                        </div>
                        <div class="item" id="english">
                            <img src="../images/1200px-Flag_of_the_United_States.svg.png">
                            <p>English</p>
                        </div>
                        <div class="item" id="japanese">
                            <img src="../images/640px-Flag_of_Japan_(with_border).png">
                            <p>Japanese</p>
                        </div>

            
                    </div> */}

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