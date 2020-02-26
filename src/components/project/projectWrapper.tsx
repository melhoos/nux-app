import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import Project from '../../interfaces/project';
import SearchInput from '../shared/searchInput';
import projectData from '../../data/projects.json';


function mappedProjects(podcasts: Project[]): Data[] {
    return podcasts.map(p => {
        return {...p}
    })
}

function ProjectWrapper() {
    const [projects, setProjects] = useState(mappedProjects(projectData))
    return (
        <>
            <p>Vi har mange prosjekter i Itera, og her er et knippe vi synes er spesielt interessante akkurat nå.</p>
            <SearchInput data={projectData} filteredData={(c) => setProjects(c) } />
            <DataList elements={projects}/>
            <p className="tips"><span>Tips oss:</span> Jobber du med noe spennende? Si ifra da vel.</p>
        </>
    )
}

export default ProjectWrapper