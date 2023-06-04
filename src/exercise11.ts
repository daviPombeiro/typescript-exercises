/**
 * Create an interface called UserData to the html's form.
 * Create a global variable UserData in window, it can be any object.
 * Add a keyup event to the form that adds {[id]: value} to UserData.
 * Save UserData in localStorage.
 * Create an User Type Guard to verify if the value in localStorage is compatible to UserData.
 * When page is refreshed, fill up the localStorage values in the form and in window.UserData.
 */

interface UserData {
    name?: string,
    email?: string,
    id?: string
}

interface Window {
    UserData: any;
}

window.UserData = {};

function validJSON(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isUserData(obj: unknown): obj is UserData {
    if (
        obj &&
        typeof obj === 'object' &&
        ('name' in obj || 'email' in obj || 'id' in obj)
    ) {
        return true;
    } else {
        return false;
    }
}

function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        } else {
            console.log("test")
        }
    }
}
  
loadLocalStorage();

function handleInput({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}

document.querySelector<HTMLElement>('#form')?.addEventListener('keyup', handleInput);