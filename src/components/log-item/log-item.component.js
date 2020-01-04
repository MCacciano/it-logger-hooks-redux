import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../redux/log/log.actions';
import Moment from 'react-moment';

import M from 'materialize-css/dist/js/materialize.min.js';

import PropTypes from 'prop-types';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const { id, attention, tech, date, message } = log;

  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({ html: `Log ${log.id} deleted.`, classes: 'red' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrentLog(log)}
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
        >
          {message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{id}</span> last updated by <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' onClick={onDeleteLog} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteLog: id => dispatch(deleteLog(id)),
  setCurrentLog: log => dispatch(setCurrentLog(log))
});

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LogItem);
