# SpendWise Interactive Budget Tracker

## Project Description

SpendWise is a simple interactive budgeting application that helps users set a monthly budget, add expenses, view total spending, and monitor their remaining budget.

This week's version improves the original SpendWise project by adding JavaScript functionality. The application now uses conditionals, arrays, loops, DOM manipulation, and event listeners to create an interactive budgeting experience.

## Improvements Made This Week

The following improvements were added:

* Users can set a monthly budget.
* Users can add multiple expenses.
* Expenses are stored in an array.
* Expenses are displayed dynamically in a table.
* Users can delete expense records.
* Total expenses are calculated automatically.
* The remaining budget is updated automatically.
* The application provides budget status feedback.
* The application responds to user actions using event listeners.
* Form validation prevents invalid expense information.

## How Conditionals Are Used

Conditional statements are used to make decisions based on user input and budget information.

For example, the application checks whether the user entered a valid budget:

```javascript
if (enteredBudget <= 0 || isNaN(enteredBudget)) {
    budgetMessage.textContent =
        "Please enter a valid budget greater than zero.";
}
```

Conditionals are also used to determine the user's budget status.

If expenses exceed the budget, the application displays a warning. If the user is close to the budget limit, a different message is displayed.

## How Arrays Are Used

An array called `expenses` stores multiple expense records.

```javascript
let expenses = [];
```

Each expense is stored as an object containing an ID, name, amount, and category.

```javascript
const expense = {
    id: Date.now(),
    name: name,
    amount: amount,
    category: category
};
```

The `push()` method adds new expense records to the array, while `splice()` removes expenses when the user clicks the Delete button.

## How Loops Are Used

A `for` loop is used to process all expense records.

For example, the application calculates the total amount spent by looping through the expenses array:

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Another loop is used to display each expense in the dashboard table.

## How the DOM Is Updated

DOM manipulation is used to update the webpage dynamically without refreshing it.

JavaScript selects HTML elements using methods such as:

```javascript
document.getElementById()
```

The application then updates their content using:

```javascript
textContent
```

Expense rows are also created dynamically using:

```javascript
document.createElement("tr")
```

This allows the dashboard to immediately display new expenses and updated totals.

## How User Interactions Are Handled

Event listeners allow the application to respond to user actions.

The budget button uses a click event:

```javascript
setBudgetBtn.addEventListener("click", function () {
    // Set budget
});
```

The expense form uses a submit event:

```javascript
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
});
```

These events connect the user's actions to the JavaScript logic.

When a user adds an expense, the application:

1. Collects the input.
2. Validates the information.
3. Creates an expense object.
4. Adds the object to the expenses array.
5. Recalculates the totals.
6. Updates the dashboard.
7. Displays the new expense.

## Challenges Encountered

One challenge was making sure the dashboard updated whenever an expense was added or deleted.

This was resolved by creating reusable functions such as `updateDashboard()` and `displayExpenses()`. These functions are called whenever the expense data changes.

Another challenge was validating user input. This was solved using conditional statements to check that the budget and expense amounts are valid before processing them.

## Testing

The application was tested by:

* Setting a monthly budget.
* Adding several expenses.
* Checking the total expenses.
* Checking the remaining budget.
* Testing budget warning messages.
* Deleting expenses.
* Confirming that the expense count updates.
* Confirming that the dashboard changes without refreshing the page.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Files

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

The updated SpendWise application demonstrates how JavaScript can make a webpage interactive. It uses conditionals for decision making, arrays for storing multiple records, loops for processing data, DOM manipulation for updating the webpage, and event listeners for responding to user interactions.
 