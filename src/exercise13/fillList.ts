export default function fillList(elementName: string, obj: CountList) {
    const element = document.getElementById(elementName);

    if (element) {
        Object.keys(obj).forEach((key: string) => {
            element.innerHTML += `<p>${key}: ${obj[key]}</p>`;
        });
    }
}