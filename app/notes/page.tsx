import { GetNotes } from "../config/data";
import Searchbar from "../components/Searchbar/Searchbar";
import NoteProps from "../components/Note/Note";
import { Note } from "@/app/components/Types/NoteTypes";

export default async function Notes() {
  const notes: Note[] = await GetNotes();
  return (
    <main>
      <Searchbar />
      {notes.map((note) => (
        <NoteProps key={note._id} note={note} />
      ))}
    </main>
  );
}
