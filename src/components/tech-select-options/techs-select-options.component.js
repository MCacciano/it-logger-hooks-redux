import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../redux/tech/tech.actions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(({ firstName, lastName, id }) => (
      <option key={id} value={`${firstName} ${lastName}`}>
        {firstName} {lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = ({ tech }) => ({ tech });

const mapDispatchToProps = dispatch => ({
  getTechs: () => dispatch(getTechs())
});

export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOptions);
