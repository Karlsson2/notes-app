'use server'
import db from './database'
import Note from '@/model/note'

const GetNotes = async () => {
    try {
        await db();
        const notes = await Note.find({}).lean();
        return JSON.parse(JSON.stringify(notes));
    } catch (error) {
        throw new Error("Failed to get notes: " + error);
    }
}
const FetchApiNote = async (endpoint: string) => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Failed to fetch note: " + error);
    }

}
export { GetNotes, FetchApiNote }