import React, { useEffect, useState } from 'react';
import LogItem from '../log-item/log-item.component';
import Preloader from '../layout/preloader/preloader.component';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch(`/logs`);
    const logs = await res.json();

    setLogs(logs);
    setLoading(false);
  };

  if (loading) return <Preloader />;

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

export default Logs;
