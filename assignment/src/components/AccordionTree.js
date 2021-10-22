import Accordion from './Accordion'
import { sourceData } from '../utils/data'


const PrepareJobRoles = ({ data }) => {
    const jobRoles = data.map(item => {
        return (
            <div key={item.id}>
                {item.job_role}
            </div>
        )
    })

    return jobRoles
}

const MatchedChildern = ({ clusterName }) => {
    const matchedCluseter = sourceData.filter(item => item.career_cluster === clusterName)
    const uniqSectors = [...new Set(matchedCluseter.map(({ sector_name }) => sector_name))]

    const childrenAndGChildren = uniqSectors.map((item, index) => {
        const matchedData = matchedCluseter.filter(element => element.sector_name === item)

        return (
            <Accordion
                key={index}
                title={
                    <a
                        href={`${matchedData[0].url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item}
                    </a>
                }
                content={<PrepareJobRoles data={matchedData} />}
            />
        )
    })

    return childrenAndGChildren
}

const AccordionTree = () => {
    const uniqCareerClusters = [...new Set(sourceData.map(({ career_cluster }) => career_cluster))]

    const data = uniqCareerClusters.map((item, index) => {
        return (
            <div key={index} style={{ boxShadow: '0 2px 4px var(--dark-grey)' }}>
                <Accordion
                    key={index}
                    title={item}
                    content={<MatchedChildern clusterName={item} />}
                />
            </div>
        )
    })
    return data
}

export default AccordionTree

