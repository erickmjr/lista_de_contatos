import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../../models/Contato';

type ContatosState = {
    contatos: Contato[];
};

const initialState: ContatosState = {
    contatos: [],
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
        adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const numeroJaExiste = state.contatos.find(
                (contato) => contato.numero === action.payload.numero,
            );

            const emailJaExiste = state.contatos.find(
                (contato) => contato.email === action.payload.email,
            );

            const nomeJaExiste = state.contatos.find(
                (contato) => contato.nome === action.payload.nome,
            );

            if (numeroJaExiste) {
                alert(
                    `A contact with the phone number "${action.payload.numero}" already exists.`,
                );
            } else if (nomeJaExiste) {
                alert(
                    `A contact named "${action.payload.nome}" already exists.`,
                );
            } else if (emailJaExiste) {
                alert(
                    `A contact with the email "${action.payload.email}" already exists.`,
                );
            } else {
                const ultimoContato = state.contatos[state.contatos.length - 1];

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1,
                };
                state.contatos.push(contatoNovo);
                alert('Contact added!');
            }
        },
    },
});

export const { remover, editar, adicionar } = contatosSlice.actions;

export default contatosSlice.reducer;
