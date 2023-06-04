import countBy from "./countBy.js";

export default class Statistics {
    private data: Transaction[];

    constructor(data: Transaction[]) {
        this.data = data;
    }

    getTotal(): number {
        return this.data.reduce((total, transaction) => {
            return total + transaction.value;
        }, 0);
    }

    getPaymentMethods(): CountList {
        return countBy(this.data.map(({ payment }) => payment));
    }

    getPaymentStatus(): CountList {
        return countBy(this.data.map(({ status }) => status));
    }

    getDays(): CountList {
        const daysOfWeek: CountList = {
            "sunday": 0,
            "monday": 0,
            "tuesday": 0,
            "wednesday": 0,
            "thursday": 0,
            "friday": 0,
            "saturday": 0
        }

        this.data.forEach((transaction: Transaction) => {
            switch (transaction.date.getDay()) {
                case 0:
                    daysOfWeek["sunday"] += 1;
                    return;
                case 1:
                    daysOfWeek["monday"] += 1;
                    return;
                case 2:
                    daysOfWeek["tuesday"] += 1;
                    return;
                case 3:
                    daysOfWeek["wednesday"] += 1;
                    return;
                case 4:
                    daysOfWeek["thursday"] += 1;
                    return;
                case 5:
                    daysOfWeek["friday"] += 1;
                    return;
                case 6:
                    daysOfWeek["saturday"] += 1;
                    return;
            }
        });

        return daysOfWeek;
    }

    getBestDay(daysOfWeek: CountList) {
        return Object.entries(daysOfWeek).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}