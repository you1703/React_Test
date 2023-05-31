// 리액트에 있는 컴포넌트는 단지 자바스크립트의 함수일 뿐이다.
import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log('updated');
  };

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}
        </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;