import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, pipe } from '../utils/operators.js';

const API = `http://localhost:3000/notas`;

const getItemsFromNotas = notas => notas.$flatMap(notas => notas.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listAll() {
        return fetch(API)
            // lida com o status da requisição
            .then(handleStatus)
            .catch(err => {
                //loga o erro técnico para o desenvolvedor
                console.log(err);
                //retorna uma mensagem de alto nível
                return Promise.reject('Não foi possível obter as notas fiscais');
            })
    },

    sumItems(code) {

        // utilizando o partialize que foi importado
        const filterItems = partialize(filterItemsByCode, code);
        // realizando a composição
        const sumItems = pipe(
            getItemsFromNotas,
            filterItems,
            sumItemsValue
        );

        return this.listAll().then(sumItems);
    }
}