import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../redux/tech/tech.actions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = e => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name', classes: 'red' });
    } else {
      const newTech = {
        firstName,
        lastName
      };

      addTech(newTech);

      M.toast({ html: `New tech ${firstName} ${lastName} has been added.`, classes: 'green' });

      // clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addTech: newTech => dispatch(addTech(newTech))
});

export default connect(null, mapDispatchToProps)(AddTechModal);
