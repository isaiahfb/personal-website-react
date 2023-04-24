import Contact from "../components/Template/Contact";
import PersonalBests from "../components/Running/PersonalBests";
import Goals from "../components/Running/Goals";
import coverPhoto from '../assets/images/IMG_1431.JPG'
import '../static/css/pages/running.css'

function Running() {
    return (
        <body>
            <div className="main">
                <div className="content">
                    <div className="intro">
                        <div className="title">
                            <h1>I love running, the feeling of moving and pushing myself to see what I'm capable of. 
                                Check out what I'm up to! 
                            </h1>
                        </div>  
                        <img id="cover-photo" src={coverPhoto} />
                    </div>
                    <PersonalBests />
                    <div className="strava-summary">
                        <h1>My Training</h1>
                        <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/45242005/latest-rides/fdeacfdfac0dd1f67dbdffee19b7bdf6fad97305'></iframe>
                    </div>
                    <Goals />
                    <Contact
                        message="Feel free to connect with me and chat with me about running or anything else!"
                        include={['instagram', 'facebook', 'linkedin']}
                    >
                    </Contact>
                </div>
            </div>
        </body>
    )
} 

export default Running