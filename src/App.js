import React from 'react';
// import {Route, Switch} from 'react-router-dom';
import './App.module.scss';
import {Header} from './components/layout/header/header';
import {Content} from './components/layout/content/content';

export const App = ()=> {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}
