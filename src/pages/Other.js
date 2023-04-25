import Contact from '../components/Template/Contact'
import BucketList from '../components/Other/BucketList'
import Interests from '../components/Other/Interests'
import coverPhoto from '../assets/images/IMG_5345.JPG'
import '../static/css/pages/other.css'

function Other() {
    return (
        <body>
            <div className="main">
                <div className="content">
                    <div className="intro">
                        <div className="title">
                            <h1> Some of my other interests are cycling, hiking, backpacking, singing, music, and photography, to name a few!
                            </h1>
                        </div>
                        <img id="cover-photo" src={coverPhoto} />

                    </div> 

                    <Interests />
                    <BucketList />
                    <Contact
                        message="Feel free to connect with me and chat with me about any of my interests!"
                        include={['instagram', 'facebook', 'linkedin']}
                    >
                    </Contact>
                </div>
            </div>
        </body>
    )
} 

export default Other