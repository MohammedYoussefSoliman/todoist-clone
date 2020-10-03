import React from 'react';
import {useProjectValues} from '../../../../context';
import scss from './projectOverlay.module.scss';



export const ProjectOverlay = ({setProject, showProjectOverlay, setShowProjectOverlay}) => {

    const {projects} = useProjectValues();

    return (
        projects && showProjectOverlay && (
            <div className={scss['project-overlay']} data-testid="project-overlay">
                <ul className={scss['project-overlay__list']}>
                    {projects.map(project => (
                        <li key={project.projectId}>
                            <div data-testid="project-overlay-action" onClick={() => {setProject(project.projectId); setShowProjectOverlay(false);}}>
                                {project.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}