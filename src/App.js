import Expenses from "./components/Expenses/Expenses";


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 10.05,
      date: new Date(2023, 1, 1)
    },
    {
      id: 'e2',
      title: 'Nintendo Switch',
      amount: 46.31,
      date: new Date(2023, 1, 1)
    },
    {
      id: 'e3',
      title: 'Steam Games',
      amount: 55.68,
      date: new Date(2023, 1, 1)
    },
    {
      id: 'e4',
      title: 'Car Insurance',
      amount: 294.64,
      date: new Date(2023, 1, 1)
    }
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
