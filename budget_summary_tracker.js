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
// function totalDays(expenseList) { ... }
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

// Compare the spended with the budget limit

function compareToBudgets(expenseList, budgetLimits) {
  const catagoryTotals = spendingByCategory(expenseList);
  const keys = Object.keys(budgetLimits);
  const comparison = [];
  for (const type of keys) {
    comparison.push({
      catagory: type,
      spent: catagoryTotals[type],
      limit: budgetLimits[type],
      status:
        catagoryTotals[type] > budgetLimits[type]
          ? 'over budget'
          : 'within budget',
    });
  }
  return comparison;
}

// Finds the total days

function totalDays(expenseList) {
  const days = []; // This will have only the days EX: 22 or 12 or 1
  let date = ''; // This is the whole date of one day EX: 2026-06-24
  for (const eachExpense of expenseList) {
    date = eachExpense.date;
    days.push(Number(date.slice(-2)));
  }
  const totalDays = Math.max(...days) - Math.min(...days) + 1; // This will have the difference b/n the max and min from the days list to find how many days was taking

  return totalDays;
}

//

function averageSpendingPerDay(expenseList) {
  const total = totalSpending(expenseList);
  const days = totalDays(expenseList);
  const avgSpendingPerDay = total / days;
  return avgSpendingPerDay;
}

const totalSpendingValue = totalSpending(expenses);
const spendingByCategoryValue = spendingByCategory(expenses);
const largestExpenseValue = largestExpense(expenses);
const compareToBudgetsValue = compareToBudgets(expenses, budgets);
const totalDaysValue = totalDays(expenses);
const averageSpendingPerDayValue = averageSpendingPerDay(expenses);

// Printing a readable output

console.log(`\nTotal spending: ${totalSpendingValue} \n`);
// ----
const categoryLines01 = Object.entries(spendingByCategoryValue)
  .map(([category, amount]) => `- ${category}: ${amount}`)
  .join('\n');
console.log(`Spending by category: \n${categoryLines01}`);
// ----
const catagoryLines02 = Object.entries(largestExpenseValue)
  .map(([catagory, amount]) => `- ${catagory}: ${amount}`)
  .join('\n');
console.log(`\nLargest expense: \n${catagoryLines02}`);
// ----
console.log(`\nBudget comparison:`);
for (const item of compareToBudgetsValue) {
  console.log(
    `- ${item.catagory}: ${item.spent} / ${item.limit} → ${item.status}`,
  );
}
// ----
console.log(`\nAverage spending per day: ${averageSpendingPerDayValue}\n`);
