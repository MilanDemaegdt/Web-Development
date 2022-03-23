const setup = () => {
    let person = prompt("Gemeente:")
    var gemeentes = new Array()
    var str=''
    while('stop' !== person.toLowerCase())
    {
        gemeentes.push(person)
        person = prompt("Gemeente:")
    }
    gemeentes.sort()
    for(let i = 0; i < gemeentes.length; i++)
    {
        str += '<option value="' + gemeentes[i] + '" />'
        var my_list = document.getElementById("gemeente")
        my_list.innerHTML = str
    }
}
window.addEventListener("load", setup);