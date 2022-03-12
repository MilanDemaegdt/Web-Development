const setup = () => {

    let herberekenButton = document.getElementById("herbereken");
    herberekenButton.addEventListener("click", herbereken)
}

const herbereken = () => {

    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let prijzen = document.getElementsByClassName("prijs");

    let aantal1 = document.getElementById("product1").value;
    let aantal2 = document.getElementById("product2").value;
    let aantal3 = document.getElementById("product3").value;

    let subtotaal1 = (aantal1 * parseFloat(prijzen[0].textContent)) * 1.06;
    let subtotaal2 = (aantal2 * parseFloat(prijzen[1].textContent)) * 1.21;
    let subtotaal3 = (aantal3 * parseFloat(prijzen[2].textContent)) * 1.21;

    subtotalen[0].textContent = `${subtotaal1.toFixed(2).toString()}` + ' Eur';
    subtotalen[1].textContent = `${subtotaal2.toFixed(2).toString()}` + ' Eur';
    subtotalen[2].textContent = `${subtotaal3.toFixed(2).toString()}` + ' Eur';

    totaal.textContent = (subtotaal1 + subtotaal2 + subtotaal3).toFixed(2).toString() + ' Eur';

}

window.addEventListener("load", setup);