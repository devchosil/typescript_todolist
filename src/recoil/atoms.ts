import { atom } from 'recoil';

export interface TodoTypes {
    id: number;
    text: string;
    done: boolean;
}

export const todoState = atom<TodoTypes[]>({
    key:"todos",
    default:[],
});