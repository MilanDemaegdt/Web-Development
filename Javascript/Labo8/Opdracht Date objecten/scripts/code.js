const setup = () => {
    let dag = 24*60*60*1000;
    let verjaardag = new Date(2003, 5, 1);
    let datum = new Date();
    let verschil = Math.round(Math.abs((verjaardag.getTime() - datum.getTime())/(dag)));
    console.log(verschil)
}
window.addEventListener("load", setup)