/**
 * Select all the elements with the class "link7",
 * create a function that should be executed for each of the elements
 * changing it's color and border.
 */

const linkElements = document.querySelectorAll('.link7');


linkElements.forEach(link => {
    if (link instanceof HTMLElement) changeLinkStyle(link);
});

function changeLinkStyle(link: HTMLElement) {
    link.style.color = "red";
    link.style.border = "solid 1px";
}