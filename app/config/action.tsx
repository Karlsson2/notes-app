'use server'
import Note from "@/model/note"
import db from "./database"
import { revalidatePath } from "next/cache"
import { Updock } from "next/font/google";
/* import { redirect } from "next/navigation" */

const addNote = async (FormData:any) => {
    const {title, content, tag} = 
    Object.fromEntries(FormData)
    try {
        db()
        const newNote = new Note({title, content, tag})
        await newNote.save()
    } catch (error) {
        throw new Error("Failed to create note" + error)
    }
};

const updateNote = async (FormData:any) => {
    const {id, title, content, tag} =
    Object.fromEntries(FormData)
    try {
        db()
        const updateFields:any = {title, content, tag}
        Object.keys(updateFields).forEach((key) => (updateFields[key] === '' || undefined) && delete updateFields[key] )
        await Note.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed to update Note" + error)
    }
}

export { addNote, updateNote }