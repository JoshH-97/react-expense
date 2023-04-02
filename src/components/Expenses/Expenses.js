import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;

// {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}    
// {filteredExpenses.length === 0 ? (  
//   <p>No Expenses Found.</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpenseItem
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//     />
//   ))
// )}

// Can also be written like this for conditional rendering Either && or the ?
/*So if this first condition is met, it moves on to the part after the end operator and it then returns, that value.*/