import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/search-bar/search-bar.component';
import Logs from './components/logs/logs.component';
import AddBtn from './components/layout/add-btn/add-btn.component';

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
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
