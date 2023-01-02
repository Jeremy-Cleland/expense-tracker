import { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
