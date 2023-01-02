import Expenses from "./components/Expenses";

import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Office Supplies",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "M1 iMac ",
      amount: 1799.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Desk",
      amount: 594.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Office Chair",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App,jsx");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
