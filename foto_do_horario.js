function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#b8d3dc"
        //BOM DIA
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#f89d5f" 
        //BOA TARDE
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#273a48"
        //BOA NOITE
    }   
}
