import React, {useState} from 'react';
import scss from './sidebar.module.scss';
import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';
import {useSelectedProjectValues} from '../../../context';
import {Projects} from '../projects/projects'
import {AddProject} from '../AddProject/AddProject'

export const Sidebar = () => {

    const {setSelectedProject} = useSelectedProjectValues();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <>
        <aside className={scss['sidebar']} data-testid="sidebar">
            <ul className={scss['sidebar__generic']}>
                <li data-testid="inbox" className={active==='inbox' ?
                [scss['sidebar__generic--item'], scss['active']].join(' ') : scss['sidebar__generic--item']}
                onClick={() => {
                    setActive('inbox');
                    setSelectedProject('INBOX');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setActive('inbox');
                      setSelectedProject('INBOX');
                    }
                  }}>
                    <span><FaInbox /></span>
                    <span>inbox</span>
                </li>
                <li data-testid="today" className={active==='today' ?
                [scss['sidebar__generic--item'], scss['active']].join(' ') : scss['sidebar__generic--item']}
                onClick={() => {
                    setActive('today');
                    setSelectedProject('TODAY');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setActive('today');
                      setSelectedProject('TODAY');
                    }
                  }}>
                    <span><FaRegCalendar /></span>
                    <span>today</span>
                </li>
                <li data-testid="next_7" className={active==='next_7' ?
                [scss['sidebar__generic--item'], scss['active']].join(' ') : scss['sidebar__generic--item']}
                onClick={() => {
                    setActive('next_7');
                    setSelectedProject('NEXT_7');
                    }}
                    onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }
                    }}>
                    <span><FaRegCalendarAlt /></span>
                    <span>next 7 days</span>
                </li>
            </ul>
            <div className={scss['sidebar__middle']}
            onClick={() => setShowProjects(!showProjects)}
                onKeyDown={(e) => {  if (e.key === 'Enter') setShowProjects(!showProjects); }}>
                    <span><FaChevronDown className={!showProjects ? scss['hidden-projects'] : undefined}/></span>
                    <h2>projects</h2>
            </div>
            <ul className={scss['sidebar__projects']}>
                <Projects />
            </ul>
            <AddProject/>
        </aside>
        </>
    )
}