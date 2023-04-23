import '../../static/css/components/Template/cell.css'

function Cell({id, img, description}) {
    return (
        <div className="item" id={id}>
            <img src={img} />
            <p>
                {description}
            </p>
        </div>
    )
}

export default Cell