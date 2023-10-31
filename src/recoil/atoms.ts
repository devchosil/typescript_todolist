import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export interface TodoTypes {
    id: number;
    text: string;
    done: boolean;
}

export const todoState = atom<TodoTypes[]>({
    key:"todos",
    default:[],
    effects_UNSTABLE: [persistAtom]
});