import { GetNotes } from "../config/data";
import Searchbar from "../components/searchbar/Searchbar";
import NoteComponent from "../components/Note/Note";
import { Note } from "@/app/components/Types/NoteTypes";
import styles from "./notes.module.css";

export default async function Notes() {
  const notes: Note[] = await GetNotes();
  return (
    <>
      <Searchbar />
      <div className={styles.NotesContainer}>
        {notes.map((note) => (
          <NoteComponent key={note._id} note={note} />
        ))}
      </div>
    </>
  );
}
