import React from 'react';
import { IconContext } from "react-icons";
import {SiTodoist} from "react-icons/si";
import {GiPointySword} from 'react-icons/gi';
import scss from './header.module.scss';



export const Header = ()=> {

    const TodoistIcon = (
        <IconContext.Provider value={{className: scss['nav__logo--icon']}}>
            <SiTodoist />
        </IconContext.Provider>
    );
    const PointySword = (
        <IconContext.Provider value={{className: scss['sword--icon']}}>
            <GiPointySword />
        </IconContext.Provider>
    );

    return (
        <header className={scss['header']}>
            <nav className={scss['header__nav']}>
                <div className={scss['nav__logo']}>
                    {TodoistIcon}
                </div>
                
                <div className={scss['nav__settings']}>
                    <ul className={scss['nav__list']}>
                        <li data-testid="quick-add-task-action" className={[scss['nav__list--item'], scss['settings__add']].join(' ')}>
                            +
                        </li>
                        <li data-testid="dark-mode-action" className={[scss['nav__list--item'], scss['dark__icon']].join(' ')}>
                            {PointySword}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}