var adicionar = document.querySelector('.adicionar')
adicionar.addEventListener('click', botaoad)

var remover = document.querySelector('.remover')
remover.addEventListener('click', botaorem)


function botaoad() {
    var num = document.querySelector('.numeros')
    var nume = Number(num.innerHTML)
    nume++
    num.innerText = `${nume}`
}

function botaorem() {
    var num = document.querySelector('.numeros')
    var nume = Number(num.innerHTML)
    nume--
    num.innerText = `${nume}`
}
