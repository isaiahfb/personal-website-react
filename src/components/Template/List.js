import '../../static/css/components/Template/list.css'

function List({title, list}) {
    return (
        <div className="list">
            <h1>{title}</h1>
            <ul>
                {list.map((listItem) => 
                    listItem.link ? 
                        <li><a href={listItem.link}>{listItem.description}</a></li> :
                        <li>{listItem.description}</li>
                    
                )}
            </ul>
        </div>
    )
}

export default List