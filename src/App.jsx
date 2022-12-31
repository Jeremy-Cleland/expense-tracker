import Expenses from "./components/Expenses";

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
  return (
    <div>
      <h2>Expenses</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
