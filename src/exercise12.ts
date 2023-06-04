/**
 * Fetch the sales at ./Api/sales.json
 * Define the type/interface of each sale (tuple)
 * Add the total sales and show on screen
 */

async function fetchSales() {
    const response = await fetch('../Api/sales.json');
    const data = await response.json();

    AddSales(data);
}

interface ProductDetails {
    brand: string,
    color: string
}

type Sale = [string, number, string, ProductDetails];

fetchSales();

function AddSales(sales: Sale[]) {
    let total = 0;
    sales.forEach(sale => {
        total += sale[1];
    });

    const element = document.getElementById('totalSales12');
    if (element) {
        element.innerHTML = `Total Revenue: $${total}`;
    }
}