import "../assests/styles/ExpenseItem.css";
import "../assests/styles/ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
