function loadexpenses() {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
}

function saveexpenses(expenses) {
    localStorage.setItem("expenses", JSON.stringiffy(expenses));
}

function addexpenses() {
    const description = prompt("Enter the description");
    const amount = prompt("enter the Amount");
    const category = prompt("enter the Category");
    const date = prompt("enter the date (yyyy-MM-dd");
    if (!description || ISNAN(amount) || !category || ISNAN(date)) alert("invalid description");
    return;
}
const expense = loadexpenses();
expenses.push({
    description, //tu peux ecrire comme sa (description : the value of the description)
    amount,
    category,
    date,
});

saveexpenses(expenses);
alert(`expenses added successfully : ${description}, ${amount}, ${category}, ${date}`);

function getTotalExpenses() {
    const expenses = loadexpenses();
    const total = expenses.reduce((total, expense) => total + expense.amount, 0);
    alert(`Total expenses : $${total.toFixed(2)}`);
}
