import Contact from "../components/Template/Contact";
import About from "../components/Home/About";
import coverPhoto from '../assets/images/IMG_0396edited copy.JPG'
import '../static/css/pages/home.css'

function Home() {
    return (
        <body>
            <div className="main">
                <div className="content">
                    <div className="intro">
                        <div className="name">
                            <p>Hey, I'm</p>
                            <h1>ISAIAH FUJII BRESNIHAN</h1>
                        </div>
                        <img id= "profile" title = "profile photo"  src={coverPhoto} alt="Profile Photo" />
                    </div>
                    <About />
                    <Contact
                        message='Feel free to connect with me and chat with me about my passions and projects!'
                        include={['instagram', 'facebook', 'linkedin']}
                    >
                    </Contact>    

                </div>

            </div>
    


     </body>
    )
}

export default Home;