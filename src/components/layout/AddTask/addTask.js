import React, {useState} from 'react';
import moment from 'moment';
import {firebase} from '../../../firebase';
import {FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import {useSelectedProjectValues} from '../../../context';
import {ProjectOverlay} from './projectOverlay/projectOverlay';
import {TaskDate} from './taskDate/taskDate';
import scss from './addTask.module.scss';

export const AddTask = ({showAddTaskMain = true, shouldShowMain = false, showQuickAddTask, setShowQuickAddTask}) => {

    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);
  
    const { selectedProject } = useSelectedProjectValues();

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';
    
        if (projectId === 'TODAY') {
          collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
          collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }
    
        return ( task && projectId &&
          firebase
            .firestore()
            .collection('tasks')
            .add({
              archived: false,
              projectId,
              task,
              date: collatedDate || taskDate,
              userId: 'AJL60lVfotB9amCR4Pr9',
            })
            .then(() => {
              setTask('');
              setProject('');
              setShowMain(false);
              setShowProjectOverlay(false);
            })
        );
      };

    return (
        <div className={showQuickAddTask ? [scss['add-task'], scss['add-task__overlay']].join(' ') : scss['add-task']}
        data-testid="add-task-comp">
            {showAddTaskMain && (
            <div className={scss['add-task__shallow']} data-testid="show-main-action"
            onClick={() => setShowMain(!showMain)}>
                <span className={scss['add-task__plus']}>+</span>
                <span className={scss['add-task__text']}>Add Task</span>
            </div>
        )}
          {(showMain || showQuickAddTask) && (
            <div className={scss['add-task__main']} data-testid="add-task-main">
              {showQuickAddTask && (
              <>
                <div data-testid="quick-add-task">
                  <h2 className={scss['header']}>Quick Add Task</h2>
                  <span
                    className={scss['add-task__cancel-x']}
                    data-testid="add-task-quick-cancel"
                    onClick={() => {
                      setShowMain(false);
                      setShowProjectOverlay(false);
                      setShowQuickAddTask(false);
                    }}
                  >
                    X
                  </span>
                </div>
              </>
            )}
            <ProjectOverlay setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
            <TaskDate setTaskDate={setTaskDate} showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate}/>
            <p>task data</p>
            <input className={scss['add-task__content']} value={task} onChange={(e) => setTask(e.target.value)} />
            <button  type="button" className={scss['add-task__submit']} data-testid="add-task" onClick={() => showQuickAddTask ? addTask() && setShowQuickAddTask(false) : addTask()} >Add Task</button>
            {!showQuickAddTask && (
            <span className={scss['add-task__cancel']} data-testid="add-task-main-cancel"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}>
              Cancel
            </span>
          )}
              <span className={scss['add-task__project']} data-testid="show-project-overlay" onClick={() => setShowProjectOverlay(!showProjectOverlay)}>
                <FaRegListAlt />
              </span>
              <span className={scss['add-task__date']} data-testid="show-task-date-overlay" onClick={() => setShowTaskDate(!showTaskDate)} >
                <FaRegCalendarAlt />
              </span>
            </div>
          )}
        </div>
    )
}