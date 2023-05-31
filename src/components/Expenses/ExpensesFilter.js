import React from 'react';

import './ExpensesFilter.css';
import Card from '../UI/Card';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Card className='expenses-filter'>
      <Card className='expenses-filter_control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </Card>
    </Card>
  );
};

export default ExpensesFilter;