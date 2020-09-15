import React from 'react';
import scss from './Checkbox.module.scss';
import {firebase} from '../../../firebase';


export const Checkbox = ({id}) => {

    const archiveTask = () => {
        firebase.firestore().collection('tasks').doc(id).update({archived: true})
    }

    return (
        <div className={scss['checkbox__holder']} data-testid="checkbox" onClick={()=>archiveTask()}>
            <span className={scss['checkbox__holder--check']}></span>
        </div>
    )
}