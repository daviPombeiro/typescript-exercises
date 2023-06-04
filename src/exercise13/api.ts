import Statistics from './statistics.js';
import Normalize from './normalize.js';
import fillList from './fillList.js';

async function fetchTransactions() {
    const response = await fetch('../Api/transactions.json');
    const data = await response.json();

    if (!data) return;

    const transactions = data.map(Normalize);
    fillStatistics(transactions);
    fillTransactions(transactions);
}

fetchTransactions();

function fillStatistics (transactions: Transaction[]) {
    const statistics = new Statistics(transactions);

    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.innerHTML = `Total: $${statistics.getTotal().toLocaleString()}`;
    }

    fillList('payment_methods', statistics.getPaymentMethods());
    fillList('payment_status', statistics.getPaymentStatus());

    const daysElement = document.getElementById('days_week');
    if (daysElement) {
        const daysWeek = statistics.getDays();
        daysElement.innerHTML = `<h3>Best day of the week: ${statistics.getBestDay(daysWeek)[0]}</h3>`;
        fillList('days_week', daysWeek);
    }
}

function fillTransactions(transactions: Transaction[]) {
    const transactionsElement = document.getElementById('transactions');

    if (transactionsElement) {
        transactions.forEach(transaction => {
            transactionsElement.innerHTML += `
            <tr>
                <td>${transaction.name}</td>
                <td>${transaction.email}</td>
                <td>$ ${transaction.value}</td>
                <td>${transaction.payment}</td>
                <td>${transaction.status}</td>
            </tr>
            `
        });
    }
}