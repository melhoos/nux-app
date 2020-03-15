import React, {useState} from 'react';
import Data from '../../types/data';
import DataList from '../shared/dataList';
import ShowAllBtn from '../shared/showAllBtn';
import Project from '../../interfaces/project';
import SearchInput from '../shared/searchInput';
import projectData from '../../data/projects.json';

function mappedProjects(podcasts: Project[]): Data[] {
    return podcasts.map(p => {
        return {...p}
    })
}

function ProjectWrapper() {
    const mapProjects = mappedProjects(projectData);
    const [projects, setProjects] = useState(mapProjects)
    return (
        <>
            <p>Vi har mange prosjekter i Itera, og her er et knippe vi synes er spesielt interessante akkurat nå.</p>
            <SearchInput data={projectData} filteredData={(c) => setProjects(c) } />
            <ShowAllBtn allElements={mapProjects} filteredElements={projects} setAll={() => setProjects(mapProjects)}/>
            <DataList elements={projects}/>
            <p className="tips"><span>Tips oss:</span> Jobber du med noe spennende? Si ifra da vel.</p>
        </>
    )
}

export default ProjectWrapper