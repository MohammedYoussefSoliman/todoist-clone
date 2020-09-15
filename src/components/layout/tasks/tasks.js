import React from 'react';
import scss from './Tasks.module.scss';
import {Checkbox} from '../../ui/checkbox/checkbox';
import {useTasks} from '../../../hooks'


export const Tasks = () => {
    const {tasks} = useTasks("1");
    console.log(tasks)
    const projectName = '';

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
        </div>
    )
}