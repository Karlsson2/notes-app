'use server'
import db from './database'
import Note from '@/model/note'

export const GetNotes = async () => {
    try {
        await db();
        const notes = await Note.find({}).lean();
        return JSON.parse(JSON.stringify(notes));
    } catch (error) {
        throw new Error("Failed to get notes: " + error);
    }
}
