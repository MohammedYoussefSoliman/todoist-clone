import React from 'react';
import scss from './sidebar.module.scss';

import {FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa';

export const Sidebar = () => {
    return (
        <>
        <aside className={scss['sidebar']} data-testid="sidebar">
            <ul className={scss['sidebar__generic']}>
                <li data-testid="inbox" className={[scss['sidebar__generic--item'], scss['inbox']].join(' ')}><span><FaInbox /></span><span>inbox</span></li>
                <li data-testid="today" className={[scss['sidebar__generic--item'], scss['today']].join(' ')}><span><FaRegCalendar /></span><span>today</span></li>
                <li data-testid="next_7" className={[scss['sidebar__generic--item'], scss['next_7']].join(' ')}><span><FaRegCalendarAlt /></span><span>next 7 days</span></li>
            </ul>
            <div className={scss['sidebar__middle']}>
                <span><FaChevronDown /></span><span>project</span>
                <ul>

                </ul>
            </div>
        </aside>
        </>
    )
}