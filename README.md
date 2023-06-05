# typescript-exercises
Typescript exercises that I did while learning it

To run this project, follow the steps:
1. clone the repository
2. run the command ``tsc -w`` in the project's root
3. run th eproject in your local (can use VSCode's extension Live Server)

#### All the exercises are in the ``src`` folder while the other folders are resources used to solve them. The ``index.html`` file can be used as a guide to all of the exercises, since it imports or references all of them.
   
##### The exercises have a dificulty progression, with the first beign simpler and the last being more difficult.


### Exercises list:

###### 1. Fix all the errors in the following function:
```
function normalizeText(texto) {
    return texto.trims().toLowercase();
}
```

###### 2. Fix all the errors in the following code:
```
const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calculateGains(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalChanged() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalChanged);
```

###### 3. Create a function called toNumber. The function can recieve ``number | string``. If the function recieves a number, returns a number. If the function recieves a string, returns a number. If the function recieves something diferent, return an error

###### 4. Define the "API" interface ``../Api/notebook.json`` and show the data.

###### 5. Define the "API" interface ``../Api/courses.json`` and show the data. There are only two course leves: beginner and advanced. If it's beginner, paint the title blue; if it's advanced paint it red.

###### 6. Select the link of the a tag with id "worng_url" using getElementById and change the href from http:// to https://.

###### 7. Select all the elements with the class "link7", create a function that should be executed for each of the elements changing it's color and border.

###### 8. Using the following HTML/CSS structure create a script that will make the mobile button work (activate/deactivate the navigation).
* inactive: nav ``class=""``, button ``aria-expanded="false"`` and ``aria-label="open menu"``
* active: nav ``class="active"``, button ``aria-expanded="true"`` and ``aria-label="close menu``
```
<header id="header">
  <a id="logo" href="">Logo</a>
  <nav id="nav">
    <button
      aria-label="Open Menu"
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="menu"
      id="btn-mobile"
    >
      Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/">About</a></li>
      <li><a href="/">Products</a></li>
      <li><a href="/">Portfolio</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
</header>
```
```
body,
ul {
  margin: 0px;
  padding: 0px;
}

a {
  color: black;
  text-decoration: none;
  font-family: sans-serif;
}

a:hover {
  background: rgba(0, 0, 0, 0.05);
}

#logo {
  font-size: 1.5rem;
  font-weight: bold;
}

#header {
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e7e7e7;
}

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile {
  display: none;
}

@media (max-width: 600px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #e7e7e7;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
```
###### 9. Create a function that rounds up a given value. The value can be a string or a number and the function should return the result with the same type.

###### 10. Fetch the API Api/courses.json. Define it's interface and create a Type Guard that guarantees that it has name, hours and tags. Use Type Guards to gurantee the Type Safety of the code. Show the API data on the screen.

###### 11. Create an interface called UserData to the html's form. Create a global variable UserData in window, it can be any object. Add a keyup event to the form that adds ``{[id]: value}`` to UserData. Save UserData in localStorage. Create an User Type Guard to verify if the value in localStorage is compatible to UserData. When page is refreshed, fill up the localStorage values in the form and in window.UserData.

###### 12. Fetch the sales at ./Api/sales.json. Define the type/interface of each sale (tuple). Add the total sales and show on screen.

###### 13. Fetch the data in ./Api/transactions.json and show it in a table.
* Calculate:
  * Total Value
  * Transactions by payment methods
  * transactions by status
  * total sales by days of the week
  * day of the week with most sales
* Orgnaize this data in a table
* Organize the code in small modules

#### Slider
This was a code challenge that consisted of recreating Instagram's stories slider using TypeScript.
