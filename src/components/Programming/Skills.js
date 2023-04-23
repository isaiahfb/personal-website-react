import SkillItem from "./SkillItem"
import pythonIcon from '../../assets/images/pUBY5pVj_normal.png'
import javaIcon from '../../assets/images/download-1.png'
import cppIcon from '../../assets/images/cpp_logo.png'
import javascriptIcon from '../../assets/images/600px-JavaScript-logo.png'
import htmlIcon from '../../assets/images/512px-HTML5_logo_and_wordmark.svg.png'
import cssIcon from '../../assets/images/CSS3_logo_and_wordmark.svg.png'
import reactIcon from '../../assets/images/React-icon.svg.png'
import nodeIcon from '../../assets/images/590px-Node.js_logo.svg.png'
import wordpressIcon from '../../assets/images/WordPress-logotype-wmark.png'
import gitIcon from '../../assets/images/2color-lightbg@2x.png'
import englishIcon from '../../assets/images/1200px-Flag_of_the_United_States.svg.png'
import japaneseIcon from '../../assets/images/640px-Flag_of_Japan.png'
import '../../static/css/components/skills.css'

function Skills() {

    const skillData = [
        {
            id: 'python',
            img: pythonIcon,
            name: 'Python'
        },
        {
            id: 'java',
            img: javaIcon,
            name: 'Java'
        },
        {
            id: 'c++',
            img: cppIcon,
            name: 'C++'
        },
        {
            id: 'javascript',
            img: javascriptIcon,
            name: 'JavaScript'
        },
        {
            id: 'html',
            img: htmlIcon,
            name: 'HTML'
        },
        {
            id: 'css',
            img: cssIcon,
            name: 'CSS'
        },
        {
            id: 'react',
            img: reactIcon,
            name: 'ReactJS'
        },
        {
            id: 'node',
            img: nodeIcon,
            name: 'NodeJS'
        },
        {
            id: 'wordpress',
            img: wordpressIcon,
            name: 'WordPress'
        },
        {
            id: 'git',
            img: gitIcon,
            name: 'Git'
        },
        {
            id: 'english',
            img: englishIcon,
            name: 'English'
        },
        {
            id: 'japanese',
            img: japaneseIcon,
            name: 'Japanese'
        }
    ]

    return (
        <div className="skills">
            <h1>My Skills</h1>
            {skillData.map((skill) => 
                <SkillItem
                    key={skill.id}
                    id={skill.id}
                    img={skill.img}
                    name={skill.name}
                >
                </SkillItem>
            )}
        </div>
    )
}

export default Skills