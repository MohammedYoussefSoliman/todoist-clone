import React, {useState} from 'react';
import {useProjectValues, useSelectedProjectValues} from '../../../context';
import {FaTrashAlt} from 'react-icons/fa';
import {GoPrimitiveDot} from 'react-icons/go';
import {firebase} from '../../../firebase';
import scss from './indproject.module.scss';



export const IndProject = ({project, color}) => {

    const [showConfirm, setShowConfirm] = useState(false);
    const {projects, setProjects} = useProjectValues();
    const {setSelectedProject} = useSelectedProjectValues();


    const deletProject = docId => {
        firebase.firestore().collection('project').doc(docId).delete().then(()=> {
            setProjects([...projects]);
            setSelectedProject('INBOX');
        })
    }

    return (
        <div className={scss['project']}>
            <div className={scss['project__name']}>
                <span className={[scss['project__dot'], scss[`color_${color}`]].join(' ')}><GoPrimitiveDot/></span>
                <span>{project.name}</span>
            </div>
            <span className={scss['project__del']} data-testid="delete-project" onClick={()=>setShowConfirm(!showConfirm)}><FaTrashAlt/></span>
            {showConfirm && (
                <div className={scss['project__del--modal']}>
                    <p>Are you sure you want to delete {project.name} project ?</p>
                    <div className={scss['lower--modal']}>
                        <button onClick={()=>{deletProject(project.docId)}}>Delete</button>
                        <span onClick={()=>setShowConfirm(false)}>Cancel</span>
                    </div>
                </div>
            )}
        </div>
    )
}