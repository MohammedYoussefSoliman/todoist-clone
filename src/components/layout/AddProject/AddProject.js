import React, {useState} from 'react';
import {firebase} from '../../../firebase';
import {generatePushId} from '../../../helpers';
import {useProjectValues} from '../../../context';
import scss from './AddProject.module.scss';

export const AddProject = ({shouldShow = false}) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');
    const {setProjects} = useProjectValues();
    const projectId = generatePushId();

    const addProject = ()=> projectName && firebase.firestore()
                            .collection('project').add({
                                projectId,
                                name: projectName,
                                userId: 'AJL60lVfotB9amCR4Pr9'
                            }).then(()=>{
                                setProjects([]);
                                setProjectName('');
                                setShow(false)
                            });
    return (
        <div className={scss['add-project']} data-testid='add-project'>
            {show && 
                <div className={scss['add-project__input-group']}>
                    <input className={scss['add-project__input-group--input']} value={projectName}
                    onChange={e=>setProjectName(e.target.value)} placeholder='Name your project' data-testid='project-name' type="text"/>
                    <button className={scss['add-project__input-group--submit']} type='button' onClick={()=>addProject()} data-testid='add-project-submit'>
                        Add Project
                    </button>
                    <span className={scss['add-project__input-group--cancel']} data-testid='hide-project-overlay' onClick={()=>setShow(!show)}>Cancel</span>
                </div>
            }
            <span className={scss['add-project--plus']}>+</span>
            <span className={scss['add-project--text']} data-testid='add-project-action' onClick={()=>setShow(!show)}>Add Project</span>
        </div>
    );
}