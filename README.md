# Budget Summary Tracker

A JavaScript practice project that analyzes expense data and compares spending against category budgets.

## What this project does

This project uses an array of expense objects and a budget object to calculate:

- total spending
- spending per category
- the largest expense
- budget status for each category
- average spending per day

## Inputs

- `expenses`: an array of objects with `amount`, `category`, `date`, and `description`
- `budgets`: an object where each category has a spending limit

Example expense object:

```js
{
  amount: 12,
  category: "food",
  date: "2026-06-22",
  description: "bread",
}
```

Example budgets object:

```js
const budgets = {
  food: 100,
  transport: 60,
  entertainment: 50,
};
```

## Outputs

The code calculates:

- `Total spending`
- `Spending by category`
- `Largest expense`
- `Budget comparison` for each category
- `Average spending per day`

## How to run

1. Open this folder in VS Code.
2. Run the file with Node.js:

```bash
node budget_summary_tracker.js
```

## Why this is useful

This project improves JavaScript skills with:

- arrays of objects
- `reduce()` and `map()` logic
- grouping data by category
- comparing values to budget limits
- working with dates in simple summaries

## Next steps

After this version, you can improve it by:

- adding a feature to filter by date range
- creating a function to add new expenses
- showing categories that are over budget only
- formatting output with a nicer report
