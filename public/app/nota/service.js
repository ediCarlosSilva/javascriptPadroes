import { handleStatus } from '../utils/promise-helpers.js';

const API = `http://localhost:3000/notas`;

const sumItems = code => notas => notas
    .$flatMap(notas => notas.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

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
        return this.listAll().then(sumItems(code));
    }
}