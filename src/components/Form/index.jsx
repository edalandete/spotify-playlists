import React from 'react';
import './index-form.css';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import DROPDOWNDATA from '../../assets/dropdown.mock';

function Form() {
  return (
    <>
      <header>
        <h1>Dreamlist Questions</h1>
      </header>
      <div className="formContainer">
        <form>
          {DROPDOWNDATA.map(({ category, options, defaultOption }) => (
            <>
              <Dropdown category={category} defaultOption={defaultOption} options={options} />
              <br />
              <br />
            </>
          ))}
          <div className="continueSubmit">
            <button type="button"><Link to="/list-preview">List</Link></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
