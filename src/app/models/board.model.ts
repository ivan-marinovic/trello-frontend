import { TList } from './tlist.model';

export interface Board {
    boardId: number
    title: string
    lists: TList[];
}