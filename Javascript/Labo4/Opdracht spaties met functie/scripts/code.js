const setup = () => {
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", getInput);

}

const getInput = () => {
    let inputText = document.getElementsByTagName("input");
    maakMetSpaties(inputText);
}

const maakMetSpaties = (inputText) => {
    let word = "";
    let input2 = inputText[0].value.replace(/\s/g, "")
    let letters = input2.split("");
    for (let i = 0;i < letters.length; i++)
    {
        word += letters[i] + " ";
    }
    console.log(word);
    return word

// hier wordt result opgevuld op basis van de parameter inputText
}
window.addEventListener("load", setup);