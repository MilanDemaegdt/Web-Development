const setup = () => {

    const familieleden = ['Michiel', 'Gilles', 'Machiel', 'Yassin', 'Milan']
    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    const voegNaamToe = () =>{
        naam = prompt("Geef een extra naam.");
        familieleden.push(naam);
        console.log(familieleden);
    }
    voegNaamToe();

    console.log(familieleden.join(", "));
}
window.addEventListener("load", setup);



