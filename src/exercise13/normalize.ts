interface TransactionAPI {
    "Status": string,
    "ID": number,
    "Date": string,
    "Name": string,
    "Payment Method": string,
    "Email": string,
    "Value ($)": string,
    "New Client": boolean
}
function stringToDate(text: string): Date {
    const [date, time] = text.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minutes);
}

function convertToCoin(value: string) {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
}

export default function normalize(transaction: TransactionAPI) {
    return {
        status: transaction["Status"],
        id: transaction["ID"],
        date: stringToDate(transaction["Date"]),
        name: transaction["Name"],
        payment: transaction["Payment Method"],
        email: transaction["Email"],
        value: convertToCoin(transaction["Value ($)"]),
        new: Boolean(transaction["New Client"])
    };
}