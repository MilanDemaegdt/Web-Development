const setup = () => {

    let body = document.getElementsByTagName('body')[0];
    let button = document.createElement("button")
    button.style.backgroundColor = 'red';
    let buttontext = document.createTextNode('Klik hier');
    button.appendChild(buttontext);
    body.prepend(button);
    button.addEventListener("click", klik);
}

const klik = () => {
    let div = document.getElementsByTagName('div')[0];
    let newP = document.createElement('p');
    let newText = document.createTextNode('Tekst');
    newP.appendChild(newText);
    div.prepend(newP);
}
window.addEventListener("load", setup);