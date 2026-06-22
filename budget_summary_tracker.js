/*
Budget Summary Tracker

This file contains the practice input data for the project.
The functions are intentionally removed so you can write your own solution.

Project goals:
- calculate total spending
- calculate spending per category
- find the largest expense
- compare spending to category budgets
- calculate average spending per day
*/

const expenses = [
  {
    amount: 12,
    category: 'food',
    date: '2026-06-22',
    description: 'bread',
  },
  {
    amount: 50,
    category: 'transport',
    date: '2026-06-22',
    description: 'taxi',
  },
  {
    amount: 30,
    category: 'food',
    date: '2026-06-23',
    description: 'lunch',
  },
  {
    amount: 15,
    category: 'entertainment',
    date: '2026-06-23',
    description: 'movie',
  },
  {
    amount: 25,
    category: 'transport',
    date: '2026-06-24',
    description: 'bus',
  },
  {
    amount: 40,
    category: 'food',
    date: '2026-06-24',
    description: 'dinner',
  },
];

const budgets = {
  food: 100,
  transport: 60,
  entertainment: 50,
};
/*

// TODO: write functions using this data
// function totalSpending(expenseList) { ... }
// function spendingByCategory(expenseList) { ... }
// function largestExpense(expenseList) { ... }
// function compareToBudgets(expenseList, budgetLimits) { ... }
// function averageSpendingPerDay(expenseList) { ... }

// TODO: print the results in a readable format

*/

// Calculate the total spent across all expenses.
function totalSpending(expenseList) {
  let totalAmount = 0;
  for (const expense of expenseList) {
    totalAmount += expense.amount;
  }
  return totalAmount;
}

// Group expenses by category and return totals for each category.
function spendingByCategory(expenseList) {
  const categoryTotals = {};

  for (const expense of expenseList) {
    const category = expense.category;
    categoryTotals[category] = (categoryTotals[category] || 0) + expense.amount;
  }

  return categoryTotals;
}

// Find the single expense item with the largest amount.
function largestExpense(expenseList) {
  let largestItem = null;

  for (const expense of expenseList) {
    if (largestItem === null || expense.amount > largestItem.amount) {
      largestItem = expense;
    }
  }

  return largestItem;
}

const totalSpendingValue = totalSpending(expenses);
const spendingByCategoryValue = spendingByCategory(expenses);
const largestExpenseValue = largestExpense(expenses);

console.log(totalSpendingValue);
console.log(spendingByCategoryValue);
console.log(largestExpenseValue);
