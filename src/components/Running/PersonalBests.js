import List from "../../../src/components/Template/List"

function PersonalBests() {

    const pbData = [
        {
            link: "https://www.athletic.net/TrackAndField/meet/205196/results/m/3/100m",
            description: "100m - 11.25 - 2014"
        },
        {
            link: "https://www.athletic.net/TrackAndField/meet/199214/results/m/3/200m",
            description: "200m - 22.64 - 2014"
        },
        {
            link: "https://www.athletic.net/TrackAndField/meet/227554/results/m/2/800m",
            description: "800m - 1:57.79 - 2015"
        },
        {
            link: "https://www.athletic.net/TrackAndField/meet/227334/results/m/1/1600m",
            description: "1600m - 4:51:24 - 2015"
        },
        {
            link: "https://www.athletic.net/CrossCountry/meet/90268/results/356474",
            description: "5km (XC) - 17:17 - 2014"
        }
    ]

    return (
        <List
            title="Personal Bests"
            list={pbData}
        >
        </List>
    )
}

export default PersonalBests