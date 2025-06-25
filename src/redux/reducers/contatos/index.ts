import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../../models/Contato';

type ContatosState = {
    contatos: Contato[];
};

const initialState: ContatosState = {
    contatos: [
        {
            nome: 'Erick mello jr',
            email: 'erickmellojr',
            numero: 75981895660,
            id: 1,
        },
    ],
};

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Contato>) => {
            state.contatos = state.contatos.filter(
                (contato) => contato.id !== action.payload.id,
            );
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.contatos.findIndex(
                (cont) => cont.id === action.payload.id,
            );

            if (indexDoContato >= 0) {
                state.contatos[indexDoContato] = action.payload;
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.contatos.find(
                (contato) => contato.numero === action.payload.numero,
            );

            if (contatoJaExiste) {
                alert('Já existe um contato com esse número.');
            } else {
                const ultimoContato = state.contatos[state.contatos.length - 1];

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1,
                };
                state.contatos.push(contatoNovo);
            }
        },
    },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
