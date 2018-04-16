import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
// importa dando um apelido para o artefato importado
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';

import { EventEmitter } from './utils/event-emitter.js';

import { Maybe } from './utils/maybe.js';

const maybe1 = new Maybe(10);

const maybe = Maybe
    .of(10)
    .map(value => value + 10)
    .map(value => value + 30)
    .getOrElse(0);

alert(maybe);

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(console.log)
);

document
    .querySelector('#myButton')
    .onclick = action;