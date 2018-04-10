import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
// importa dando um apelido para o artefato importado
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';

const operation1 = takeUntil(3, () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)
);


document
    .querySelector('#myButton')
    .onclick = operation1;