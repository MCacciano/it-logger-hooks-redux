import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../redux/tech/tech.actions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDeleteTech = () => {
    deleteTech(id);
    M.toast({ html: `Tech ${firstName} ${lastName} has been deleted`, classes: 'green' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDeleteTech} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteTech: id => dispatch(deleteTech(id))
});

export default connect(null, mapDispatchToProps)(TechItem);
