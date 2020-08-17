
let heading = document.querySelector('h1');

function newUser() {
    let newName = prompt('Enter your name here!');
    if (!newName) {
        newUser();
    } else {
        localStorage.setItem('name', newName);
        heading.innerHTML = 'Hi ' + newName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.innerHTML = 'Hi ' + storedName;
}

