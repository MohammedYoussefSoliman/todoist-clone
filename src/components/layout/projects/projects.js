import React, {useState} from 'react';
import { useProjectValues, useSelectedProjectValues } from '../../../context';
import scss from './projects.module.scss';
import {IndProject} from '../project/indproject'

export const Projects = ({activeValue = null}) => {

    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValues();
    const {projects} = useProjectValues();

    const handleDotsColor = (index) => {
        let color;
        if(index+1 > 5) {
            let remainder = (index+1) % 5
            color = remainder+1
        }else{
            color = index+1;
        }
        return color
    }
    
    return (
        <>
        {projects && projects.map( (project, index) => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={active === project.projectId ? [scss['active'], scss['.projects']].join(' ') : scss['.projects']}
                onKeyDown={()=>{setActive(project.projectId); setSelectedProject(project.projectId)}}
                onClick={()=>{setActive(project.projectId); setSelectedProject(project.projectId)}}>
                    <IndProject project={project} color={handleDotsColor(index)}/>
            </li>
        ))
        }
        </>
    )

}