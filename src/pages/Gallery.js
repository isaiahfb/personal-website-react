import Contact from "../components/Template/Contact"
import PhotoGallery from "../components/Gallery/PhotoGallery"

function Gallery() {
    return (
        <body>
            <div className="main">
                <div className="content">
                    <PhotoGallery />
                    <Contact
                        message="Feel free to connect with me and chat with me photography or anything else!"
                        include={['instagram', 'facebook', 'linkedin']}
                    >
                    </Contact>
                </div>
            </div>
        </body>
    )
} 

export default Gallery