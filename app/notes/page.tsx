import { GetNotes } from "../config/data";
import Searchbar from "../components/Searchbar/Searchbar";
import NoteComponent from "../components/Note/Note";
import { Note } from "@/app/components/Types/NoteTypes";

export default async function Notes() {
  const notes: Note[] = await GetNotes();
  return (
    <main>
      <Searchbar />
      {notes.map((note) => (
        <NoteComponent key={note._id} note={note} />
      ))}
    </main>
  );
}
