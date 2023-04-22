import profilePhoto from  '../../assets/images/profilephoto2.jpg'
import facebookLogo from '../../assets/images/f_logo_RGB-Blue_1024.png'
import instagramLogo from '../../assets/images/IG_Glyph_Fill copy.png'
import linkedInLogo from '../../assets/images/LI-In-Bug.png'
import githubLogo from '../../assets/images/GitHub-Mark-120px-plus.png'
import resumeLogo from '../../assets/images/543772-200.png'
import resume from '../../assets/Resume Isaiah Fujii Bresnihan.pdf'
import '../../static/css/components/Template/contact.css'

function Contact({message, include}) {

    const contactLinks = [
        {
            id: 'facebook',
            link: 'https://www.facebook.com/isaiah.fujii/',
            img: facebookLogo
        },
        {
            id: 'instagram',
            link: 'https://www.instagram.com/babyzayfujii/',
            img: instagramLogo
        },
        {
            id: 'linkedin',
            link: 'https://www.linkedin.com/in/isaiahfujiibresnihan/',
            img: linkedInLogo
        },
        {
            id: 'github',
            link: 'https://github.com/isaiahfb',
            img: githubLogo
        },
        {
            id: 'resume',
            link: resume,
            img: resumeLogo
        }

    ]

    return (
        <div class="contacts">
            <img id="head-shot" title="head shot" src={profilePhoto} alt="Head Shot" />

            <p>{message}</p>

            <div className="social-links">
                {contactLinks.filter((contactLink) =>
                    include.includes(contactLink.id)
                ).map((contactLink) => (
                    <a
                        key={contactLink.id}
                        id={contactLink.id} 
                        href={contactLink.link}
                    >
                        <img src={contactLink.img} />
                    </a>
                ))}
            </div>
            <div className="email">
                <a href = "mailto: isaiah.fujii@gmail.com">isaiah.fujii@gmail.com</a>
            </div>

        </div>
    )
}

export default Contact