import React from 'react';
import scss from './content.module.scss';
import {Sidebar} from '../sidebar/sidebar';
import {Tasks} from '../tasks/tasks'

export const Content = () => {
    return (
        <div className={scss['content']}>
        <Sidebar />
        <Tasks />
        </div>
    )
}