// 리액트에 있는 컴포넌트는 단지 자바스크립트의 함수일 뿐이다.
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;