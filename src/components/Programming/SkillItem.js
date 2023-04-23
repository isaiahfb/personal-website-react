import '../../static/css/components/skillitem.css'

function SkillItem({id, img, name}) {
    return (
        <div className="skillitem" id={id}>
            <img src={img} />
            <p>{name}</p>
        </div>
    )
}

export default SkillItem