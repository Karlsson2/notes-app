import { GetNotes } from "@/app/config/data";
import { updateNote } from "@/app/config/action";
import { Note } from "@/app/components/Types/NoteTypes";
import styles from "./note.module.css";
import UpdateForm from "@/app/components/UpdateForm/updateForm";

type Params = {
  params: { id: String };
};

export default async function NotePage(params: Params) {
  const notes: Note[] = await GetNotes();
  const slug: String = params.params.id;
  const note: Note | undefined = notes.find((note: Note) => note._id === slug);

  return <UpdateForm note={note!} />;
}
