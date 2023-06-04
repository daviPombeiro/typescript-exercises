/**
 * Define the "API" interface ../Api/notebook.json and show the data
 */

interface Company {
    name: string,
    foundation: number,
    country: string
}

interface Notebook {
    name: string,
    price: number,
    description: string,
    warranty: string | number,
    accidentInsurance: boolean,
    manufacturingCompany: Company,
    assemblerCompany: Company
}

async function fetchProduct() {
    const response = await fetch('../Api/notebook.json');
    const data = await response.json();
    showProduct(data);
}

fetchProduct();

function showProduct(data: Notebook) {
    const element = document.getElementById("exercise4");
    if(element) {
        element.innerHTML += `
            <div>
                <h2>${data.name}</h2>
                <h6>$${data.price}</h6>
                <p style="margin-bottom: 10px;">${data.description}</p>
                <p style="font-weight: bold;">Warranty time: ${data.warranty}</p>
                <p style="font-weight: bold;">${data.accidentInsurance ? "has accident insurance" : "doesn't have accident insurance"}</p>
                <div style="display: flex;">
                    <div style="margin-right: 20px; border: solid 1px; padding: 5px;">
                        <h4>Manufacturing Company:</h4>
                        <p>Name: ${data.manufacturingCompany.name}</p>
                        <p>Country: ${data.manufacturingCompany.country}</p>
                        <p>Foundation: ${data.manufacturingCompany.foundation}</p>
                    </div>
                    <div style="border: solid 1px; padding: 5px;">
                        <h4>Assembler Company:</h4>
                        <p>Name: ${data.assemblerCompany.name}</p>
                        <p>Country: ${data.assemblerCompany.country}</p>
                        <p>Foundation: ${data.assemblerCompany.foundation}</p>
                    </div>
                </div>
            </div>
        `;
    }
}