const setup = () => {
    let student= {
        voornaam: "Milan",
        familienaam: "Demaegdt",
        geboorteDatum: new Date("2003‐06‐01")
    }
    let tekst = JSON.stringify(student);
    console.log(tekst);
    let student1 = JSON.parse('{"voornaam":"Milan","familienaam":"Demaegdt","geboorteDatum":null}');
    console.log(student1.voornaam);
}
window.addEventListener("load", setup);