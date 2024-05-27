'use server'
import { Note as NoteType } from '../components/Types/NoteTypes';
import db from './database'
import Note from '@/model/note'

const GetNotes = async (): Promise<NoteType[]> => {
    try {
        await db();
        const notes: NoteType[] = await Note.find({}).lean();
        return JSON.parse(JSON.stringify(notes));
    } catch (error) {
        throw new Error("Failed to get notes: " + error);
    }
}
const FetchApiNote = async (endpoint: string) => {
    try {
        const response: Response = await fetch(endpoint);
        const data: any = await response.json();
        return data;
    } catch (error) {
        throw new Error("Failed to fetch note: " + error);
    }

}
export { GetNotes, FetchApiNote }