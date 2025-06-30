import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../../models/Contato';

const initialState: Contato[] = [];

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<Contato>) => {
            state = state.filter((contato) => contato.id !== action.payload.id);
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.findIndex(
                (cont) => cont.id === action.payload.id,
            );

            if (indexDoContato >= 0) {
                state[indexDoContato] = action.payload;
            }
        },
        adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const ultimoContato = state[state.length - 1];

            const contatoNovo = {
                ...action.payload,
                id: ultimoContato ? ultimoContato.id + 1 : 1,
            };
            state.push(contatoNovo);
        },
    },
});

export const { remover, editar, adicionar } = contatosSlice.actions;

export default contatosSlice.reducer;
