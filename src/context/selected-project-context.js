import React, {useState, createContext, useContext } from 'react';

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({children}) => {

    const [selectedProject, setSelectedProject] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    )
};

export const useSelectedProjectValues = ()=>useContext(SelectedProjectContext);