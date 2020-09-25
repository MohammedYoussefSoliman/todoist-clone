import React from 'react';
// import {Route, Switch} from 'react-router-dom';
import './App.module.scss';
import {Header} from './components/layout/header/header';
import {Content} from './components/layout/content/content';
import {ProjectsProvider, SelectedProjectProvider} from './context';

export const App = ()=> {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Header />
        <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}
