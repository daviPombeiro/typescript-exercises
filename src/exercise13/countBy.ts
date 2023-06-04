export default function countBy(arr: (string | number)[]) {
    return arr.reduce((obj: CountList, item: (string | number)) => {
        obj[item] ? ++obj[item] : obj[item] = 1;
        return obj;
    }, {});
}