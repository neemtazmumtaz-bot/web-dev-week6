// Monthly budget
let budget = 0;

// Array used to store multiple expense records
let expenses = [];

// Get HTML elements
const budgetInput = document.getElementById("budgetInput");
const setBudgetBtn = document.getElementById("setBudgetBtn");
const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const remainingDisplay = document.getElementById("remainingDisplay");
const countDisplay = document.getElementById("countDisplay");
const budgetMessage = document.getElementById("budgetMessage");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const expenseTableBody = document.getElementById("expenseTableBody");
const emptyMessage = document.getElementById("emptyMessage");
const statusMessage = document.getElementById("statusMessage");


// Set the monthly budget
setBudgetBtn.addEventListener("click", function () {

    const enteredBudget = Number(budgetInput.value);

    // Conditional statement
    if (enteredBudget <= 0 || isNaN(enteredBudget)) {
        budgetMessage.textContent = "Please enter a valid budget greater than zero.";
        return;
    }

    budget = enteredBudget;

    budgetMessage.textContent = "Your monthly budget has been set.";

    updateDashboard();
});


// Add an expense
expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    // Conditional validation
    if (name === "" || amount <= 0 || category === "") {
        alert("Please complete all expense fields.");
        return;
    }

    // Create an expense object
    const expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    // Store the record in the array
    expenses.push(expense);

    // Clear the form
    expenseForm.reset();

    // Update the webpage
    updateDashboard();
    displayExpenses();
});


// Calculate the total expenses
function calculateTotal() {

    let total = 0;

    // Loop through all expense records
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update dashboard information
function updateDashboard() {

    const totalExpenses = calculateTotal();
    const remaining = budget - totalExpenses;

    budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;
    expenseDisplay.textContent = `KSh ${totalExpenses.toLocaleString()}`;
    remainingDisplay.textContent = `KSh ${remaining.toLocaleString()}`;
    countDisplay.textContent = expenses.length;

    updateBudgetStatus(remaining);
}


// Conditional budget feedback
function updateBudgetStatus(remaining) {

    if (budget === 0) {
        statusMessage.textContent =
            "Set a monthly budget to begin tracking your spending.";
    } else if (remaining < 0) {
        statusMessage.textContent =
            "Warning: You have exceeded your budget.";
    } else if (remaining <= budget * 0.2) {
        statusMessage.textContent =
            "Careful: You are close to your budget limit.";
    } else {
        statusMessage.textContent =
            "Good job! You are within your budget.";
    }
}


// Display expenses in the table
function displayExpenses() {

    expenseTableBody.innerHTML = "";

    // Show empty message when there are no expenses
    if (expenses.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    // Loop through the array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>KSh ${expense.amount.toLocaleString()}</td>
            <td>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            </td>
        `;

        expenseTableBody.appendChild(row);
    }
}


// Delete an expense
function deleteExpense(id) {

    // Find the expense index
    const index = expenses.findIndex(function (expense) {
        return expense.id === id;
    });

    // Conditional check
    if (index !== -1) {
        expenses.splice(index, 1);
    }

    updateDashboard();
    displayExpenses();
}


// Initial display
updateDashboard();
displayExpenses(); 