import {useState, useEffect} from 'react';
import moment from 'moment'
import {collatedTasksExist} from '../helpers';
import {firebase} from '../firebase';

const userId = 'AJL60lVfotB9amCR4Pr9';

export const useTasks = selectedProject => {

    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);


    useEffect(()=>{
        let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', userId); // this will return true or false
        
        //unsubscribe logic

        // unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
        // (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) : selectedProject === 'today' ?
        // (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'))) : selectedProject === 'inbox' || selectedProject === '0' ?
        // (unsubscribe = unsubscribe.where('date', '==', '')) : unsubscribe;

        // in if-style for better understanding:

        if(selectedProject && !collatedTasksExist(selectedProject)) {
            unsubscribe = unsubscribe.where('projectId', '==', selectedProject)
        }else if(selectedProject === 'TODAY'){
            unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'))
        }else if(selectedProject === 'INBOX' || selectedProject === '0') {
            unsubscribe = unsubscribe.where('date', '==', '')
        }

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task =>({
                id: task.id,
                ...task.data()
            }));
            if(selectedProject === 'NEXT_7') {
                setTasks(newTasks.filter(task => moment(task.date, 'DD-MM-YY').diff(moment(), 'days') <= 7 && task.archived !== true));
            }else{
                setTasks(newTasks.filter(task => task.archived !== true));
            }
            setArchivedTasks(newTasks.filter(task => task.archived === true));
        });

        return () => unsubscribe()

    }, [selectedProject])

    return {tasks, archivedTasks}
}

export const useProjects = ()=> {
    const [projects, setProjects] = useState({});

    useEffect(()=>{
        firebase.firestore().collection('project').where('userId', '==', userId).orderBy('projectId').get().then(snapshot =>{
            const allProject = snapshot.docs.map(project =>(
               {...project.data(), docId: project.id} 
            ));
            if(JSON.stringify(allProject) !== JSON.stringify(projects)) {
                setProjects(allProject)
            }
        })
    }, [projects])

    return {projects, setProjects}
}