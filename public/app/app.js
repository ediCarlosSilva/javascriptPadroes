import { handleStatus, log } from './utils/promise-helpers.js';

document
    .querySelector('#myButton')
    .onclick = () =>
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    // achatar em uma dimensao os itens de cada nota
    .then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
    .then(log)
    // retornará para o próximo then uma lista de itens filtrada
    .then(itens => itens.filter(item => item.codigo == '2143'))
    // retornará para o próximo then o total 
    .then(log)
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))
    .then(total => console.log(total))
    .catch(console.log);