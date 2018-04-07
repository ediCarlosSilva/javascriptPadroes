import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
// importa dando um apelido para o artefato importado
import { notasService as service } from './nota/service.js';



document
    .querySelector('#myButton')
    .onclick = () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);