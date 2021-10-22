import { sourceData } from '../utils/data'
import './Menu.css';

const PrepareJobRoles = ({ data }) => {
    const jobRoles = data.map(item => {
        return (
            <li key={item.id}>
                <a href="#">{item.job_role}</a>
            </li>
        )
    })

    return <ul>{jobRoles}</ul>
}

const MatchedChildern = ({ clusterName }) => {
    const matchedCluseter = sourceData.filter(item => item.career_cluster === clusterName)
    const uniqSectors = [...new Set(matchedCluseter.map(({ sector_name }) => sector_name))]

    const childrenAndGChildren = uniqSectors.map((item, index) => {
        const matchedData = matchedCluseter.filter(element => element.sector_name === item)
        return (
            <li key={index}>
                <a
                    href={`${matchedData[0].url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item}
                    <span className="arrow"></span>
                </a>
                <PrepareJobRoles data={matchedData} />
            </li>

        )
    })

    return <ul>{childrenAndGChildren}</ul>
}

const Tree = () => {
    const uniqCareerClusters = [...new Set(sourceData.map(({ career_cluster }) => career_cluster))]
    const data = uniqCareerClusters.map((item, index) => {
        return (
            <li key={index}>
                <a href="#">{item}</a>
                <MatchedChildern clusterName={item} />
            </li>
        )
    })

    return (
        <div id="menu">
            <ul>
                {data}
            </ul>
        </div>
    )
}

export default Tree