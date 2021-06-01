import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ category, defaultOption, options }) {
  return (
    <label htmlFor={category}>
      {category}
      {' '}
      <select name={defaultOption} selected="selected">
        <option disabled selected value>
          {' '}
          {defaultOption}
          {' '}
        </option>
        {
        options.map((optionData) => (
          (<option value={optionData}>{optionData}</option>)))
        }
      </select>
    </label>
  );
}

Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  options: PropTypes.shape([]).isRequired
};

export default Dropdown;
