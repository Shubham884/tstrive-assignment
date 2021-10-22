import { sourceData } from '../../utils/data'
import '../../App.css';

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

const Tree = () => {
    const uniqSectors = [...new Set(sourceData.map(({ sector_name }) => sector_name))]
    const childrenAndGChildren = uniqSectors.map((item, index) => {
        const matchedData = sourceData.filter(element => element.sector_name === item)
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

    return (
        <div id="menu">
            <ul>
                <li>
                    <a href="#">{sourceData[0].career_cluster}</a>
                    <ul>{childrenAndGChildren}</ul>
                </li>
            </ul>
        </div>
    )
}

export default Tree