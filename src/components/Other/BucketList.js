import List from "../Template/List"

function BucketList() {

    const bucketListData = [
        {
            description: "Bike the U.S. from coast to coast."
        },
        {
            description: "Bike the length of Japan."
        },
        {
            description: "Set an FKT on the Mount Fuji Sea-to-Summit route"
        },
        {
            description: "Hike the Hyakumeizan (百名山) peak list"
        },
        {
            description: "See and photograph the Northern Lights"
        }
    ]
    return (
        <List
            title="Bucket List"
            list={bucketListData}
        >
        </List>
    )
}

export default BucketList