interface Transaction {
    "status": string,
    "id": number,
    "date": Date,
    "name": string,
    "payment": string,
    "email": string,
    "value": number,
    "new": boolean
}

interface CountList {
    [key: string]: number
}