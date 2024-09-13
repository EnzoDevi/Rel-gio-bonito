function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${min}. `
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.png'
        msg.innerHTML += 'Agora está de manhã'
        document.body.style.background = 'rgba(216, 148, 0, 0.801)'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        msg.innerHTML += 'Agora está de tarde'
        document.body.style.background = 'rgba(187, 55, 2, 0.849)'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        msg.innerHTML += 'Agora está de noite'
        document.body.style.background = 'rgba(50, 3, 88, 0.801)'
    }

}