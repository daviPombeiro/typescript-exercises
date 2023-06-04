/**
 * Using the following HTML/CSS structure create a script that
 * will make the mobile button work (activate/deactivate the navigation).
 * 
 * inactive: nav class="", button aria-expanded="false" and aria-label="open menu"
 * active: nav class="active", button aria-expanded="true" and aria-label="close menu"
 */

const menuButton = document.getElementById("btn-mobile");

function toggleMobileMenu(this: HTMLButtonElement, event: Event){
    const nav = document.getElementById("nav");

    if (this instanceof HTMLButtonElement && nav) {
        if (this.ariaExpanded !== "true"){
            this.ariaExpanded = "true";
            this.ariaLabel = "Close Menu";

            nav.classList.add("active");
        } else {
            this.ariaExpanded = "false";
            this.ariaLabel = "Open Menu";

            nav.classList.remove("active");
        }
    }
}

menuButton?.addEventListener('touchstart', toggleMobileMenu);