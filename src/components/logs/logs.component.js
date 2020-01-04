import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LogItem from '../log-item/log-item.component';
import Preloader from '../layout/preloader/preloader.component';

// redux
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  // logs initialState is null so a check is needed
  if (loading || !logs) return <Preloader />;

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map(log => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = ({ log }) => ({
  log
});

const mapDispatchToProps = dispatch => ({
  getLogs: () => dispatch(getLogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
