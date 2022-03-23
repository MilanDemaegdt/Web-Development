const setup = () => {
    let button = document.getElementById("action");
    button.addEventListener("click", print);
}

const print = () => {
    let word = "";
    let input1 = document.getElementById("passagiers");
    let input = input1.value;
    let words = input.split(",");

    for (let i = 0;i < words.length; i+=2)
    {
        word += words[i] + " - " + words[i+1] + "</br>";
    }
    document.getElementsByTagName("div") = word;
    console.log(input);
}