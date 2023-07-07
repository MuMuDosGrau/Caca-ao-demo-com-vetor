const form = document.querySelector('form');
//const temperatura = document.getElementById('temperatura')
const nome = document.getElementById('nome');
const fraqueza = document.getElementById('fraqueza');
const foto = document.getElementById('foto');

const fantasmas = [
    ['Presságio da Morte' , 'Sal e ferro'],
    ['Espíritos Vingativos' , 'Sal, Ferro, Sede Saciada'],
    ['Ecos da Morte' , 'Sal Ferro Hoodo']
]

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)
    const nomeFantasma = inputs.get('busca')

    for(let i = 0; i < fantasmas.length; i++){
        if (nomeFantasma == fantasmas[i][0]){
            nome.textContent = fantasmas[i][0]
            fraqueza.textContent = fantasmas[i][1]
        }
    }
    

    return false

}