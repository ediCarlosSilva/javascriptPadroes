import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
// importa dando um apelido para o artefato importado
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';

const showMessage = () => console.log('Opa!');

const operation = takeUntil(3, showMessage);
let counter = 10;
while (counter--) operation();


document
    .querySelector('#myButton')
    .onclick = () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);