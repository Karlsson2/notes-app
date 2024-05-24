"use server";
import Note from "@/model/note";
import db from "./database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
/* import { Note } from "../components/Types/NoteTypes"; */
/* import { redirect } from "next/navigation" */
const addNote = async (FormData: FormData) => {
  const { title, content, tag } = Object.fromEntries(FormData);
  try {
    db();
    const newNote = new Note({ title, content, tag });
    await newNote.save();
  } catch (error) {
    throw new Error("Failed to create note" + error);
  }
  revalidatePath("/");
  redirect("/notes");
};

const updateNote = async (FormData: FormData) => {
  const { id, title, content, tag } = Object.fromEntries(FormData);
  try {
    db();
    const updateFields: any = { title, content, tag };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Note.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed to update Note" + error);
  }
  revalidatePath("/");
  redirect("/notes");
};

const deleteNote = async (FormData: FormData) => {
  const { id } = Object.fromEntries(FormData);
  try {
    db();
    await Note.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to Delete" + error);
  }
  revalidatePath("/");
};

export { addNote, updateNote, deleteNote };
