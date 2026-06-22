/*
Budget Summary Tracker

This starter file uses an array of expense objects and a budget object.
It includes functions to calculate:
- total spending
- spending per category
- the largest expense
- budget comparison by category
- average spending per day
*/

const expenses = [
  { amount: 12, category: "food", date: "2026-06-22", description: "bread" },
  {
    amount: 50,
    category: "transport",
    date: "2026-06-22",
    description: "taxi",
  },
  { amount: 30, category: "food", date: "2026-06-23", description: "lunch" },
  {
    amount: 15,
    category: "entertainment",
    date: "2026-06-23",
    description: "movie",
  },
  { amount: 25, category: "transport", date: "2026-06-24", description: "bus" },
  { amount: 40, category: "food", date: "2026-06-24", description: "dinner" },
];

const budgets = {
  food: 100,
  transport: 60,
  entertainment: 50,
};

function totalSpending(expenseList) {
  return expenseList.reduce((sum, item) => sum + item.amount, 0);
}

function spendingByCategory(expenseList) {
  return expenseList.reduce((totals, item) => {
    if (!totals[item.category]) {
      totals[item.category] = 0;
    }
    totals[item.category] += item.amount;
    return totals;
  }, {});
}

function largestExpense(expenseList) {
  return expenseList.reduce((largest, item) => {
    return !largest || item.amount > largest.amount ? item : largest;
  }, null);
}

function compareToBudgets(expenseList, budgetLimits) {
  const categoryTotals = spendingByCategory(expenseList);

  return Object.keys(budgetLimits).map((category) => {
    const spent = categoryTotals[category] || 0;
    const limit = budgetLimits[category];
    const status = spent > limit ? "over budget" : "within budget";

    return {
      category,
      spent,
      limit,
      status,
    };
  });
}

function averageSpendingPerDay(expenseList) {
  const totalsByDate = expenseList.reduce((totals, item) => {
    totals[item.date] = (totals[item.date] || 0) + item.amount;
    return totals;
  }, {});

  const days = Object.keys(totalsByDate).length;
  const total = Object.values(totalsByDate).reduce(
    (sum, amount) => sum + amount,
    0,
  );

  return days === 0 ? 0 : total / days;
}

console.log("Budget Summary Tracker — Starter Output\n");
console.log(`Total spending: ${totalSpending(expenses)}`);
console.log("Spending by category:", spendingByCategory(expenses));
console.log("Largest expense:", largestExpense(expenses));
console.log("Budget comparison:", compareToBudgets(expenses, budgets));
console.log(
  `Average spending per day: ${averageSpendingPerDay(expenses).toFixed(2)}`,
);
