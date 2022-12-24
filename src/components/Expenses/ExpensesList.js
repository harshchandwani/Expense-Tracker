import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
    
    
   if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found, N0 Expenses</h2>
   }
    return <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem 
            key = {expense.id}
            // TO MAKE SURE THE REACT KNOWS WHERE TO PLACE THE ITEM, OR WHICH ELEMENT IS CHANGING
            title ={expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />
        ))}
    </ul>
}

export default ExpensesList