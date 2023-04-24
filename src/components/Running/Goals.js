import List from "../../../src/components/Template/List"

function Goals() {
    
    const goalsData = [
        {
            description: "Sub 4:45 mile"
        },
        {
            description: "Sub 17 minute 5km"
        },
        {
            description: "Sub 75 minutes half marathon"
        },
        {
            description: "Run a marathon"
        }
    ]
    return (
        <List
            title="My Goals"
            list={goalsData}
        >
        </List>
    )
}

export default Goals