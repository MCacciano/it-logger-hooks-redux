import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/search-bar/search-bar.component';
import Logs from './components/logs/logs.component';
import AddBtn from './components/layout/add-btn/add-btn.component';
import AddLogModal from './components/add-log-modal/add-log-modal.component';
import EditLogModal from './components/edit-log-modal/edit-log-modal.component';
import AddTechModal from './components/add-tech-modal/add-tech-modal.component';
import TechListModal from './components/tech-list-modal/tech-list-modal.component';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
