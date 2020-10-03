import React, {useEffect} from 'react';
import scss from './Tasks.module.scss';
import {Checkbox} from '../../ui/checkbox/checkbox';
import {AddTask} from '../AddTask/addTask';
import {useTasks} from '../../../hooks';
import {getTitle, getCollatedTitle, collatedTasksExist} from '../../../helpers';
import {collatedTasks} from '../../../helpers/constants';
import {useProjectValues, useSelectedProjectValues} from '../../../context';


export const Tasks = () => {
    const {selectedProject} = useSelectedProjectValues();
    const {tasks} = useTasks(selectedProject);
    const {projects} = useProjectValues();
    let projectName = '';

    if(collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }
    
    if( projects && projects.length > 0 && selectedProject &&
        !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
        console.log('project Name 1:'+projectName)
    }
    
    useEffect(()=> {
        document.title = `${projectName}: Todoist`;
        
    },[projectName]);
    
    return (
        <div className={scss['tasks']}>
            <h2 className={scss['tasks__title']}>{projectName}</h2>
            <ul className={scss['tasks__list']}>
                {tasks.map(task =>(
                    <li key={task.id} className={scss['tasks__list--item']}>
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            <AddTask />
        </div>
    )
}