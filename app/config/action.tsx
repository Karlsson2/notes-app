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

  revalidatePath("/notes");
  redirect("/notes");
};

const updateNote = async (FormData: FormData) => {
  const { id, title, content, tag } = Object.fromEntries(FormData);
  id?.toString().trim().toString();
  title?.toString().trim().toString();
  content?.toString().trim().toString();
  tag?.toString().trim().toString();
  try {
    db();
    const updateFields: any = { title, content, tag };
    await Note.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    throw new Error("Failed to update Note" + error);
  }
  revalidatePath("/notes");
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
  revalidatePath("/notes");
};

export { addNote, updateNote, deleteNote };
