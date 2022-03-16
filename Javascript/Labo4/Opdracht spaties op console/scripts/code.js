const setup = () => {
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", print);
}

const print = () => {
    let word = "";
    let input = document.getElementsByTagName("input");
    let input2 = input[0].value.replace(/\s/g, "")
    let letters = input2.split("");
    for (let i = 0;i < letters.length; i++)
    {
        word += letters[i] + " ";
    }
    console.log(word);

}
window.addEventListener("load", setup);