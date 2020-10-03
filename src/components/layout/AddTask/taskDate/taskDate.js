
import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import scss from './taskDate.module.scss';



export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => {


    return ( showTaskDate &&
        <div className={scss['task-date']} data-testid="task-date-overlay">
            <ul className={scss['task-date__list']}>
                <li>
                    <div onClick={()=>{setShowTaskDate(false); setTaskDate(moment().format('DD/MM/YYYY'));}} data-testid="task-date-today">
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li>
                    <div onClick={() => {setShowTaskDate(false); setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));}} data-testid="task-date-tomorrow">
                        <span>
                            <FaSun />
                        </span>
                        <span>Tomorrow</span>
                    </div>
                </li>
                <li>
                    <div onClick={() => {setShowTaskDate(false); setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));}} data-testid="task-date-next-week">
                        <span>
                            <FaRegPaperPlane />
                        </span>
                        <span>Next week</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}