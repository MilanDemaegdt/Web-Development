const setup = () => {
    let test = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < test.length; i++) {
        test[i].className = "opvallend belangrijk";
    }
}
window.addEventListener("load", setup);