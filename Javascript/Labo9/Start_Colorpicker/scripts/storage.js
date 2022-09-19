const setup =() => {
    let btnVerhoog=document.getElementById("btnVerhoog");
    btnVerhoog.addEventListener("click", verhoog);
}

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;

    let green = document.getElementById("sldGreen").value;

    let blue = document.getElementById("sldBlue").value;

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
};

const restoreSliderValues = () => {
    document.getElementById("sldRed").value = localStorage.getItem("red");

    document.getElementById("sldGreen").value = localStorage.getItem("green");

    document.getElementById("sldBlue").value = localStorage.getItem("blue");
};

const storeSwatches = (red,green,blue) => {
    // bouw een array met kleurinfo objecten

    var rood = red
    var groen = green
    var blauw = blue
    var item = [];
    item.push(rood,groen,blauw);
    localStorage.item += JSON.stringify({rood,groen,blauw});
};

const restoreSwatches = () => {
    var array = localStorage.getItem('item');
    var array2 = JSON.parse(array);
};
