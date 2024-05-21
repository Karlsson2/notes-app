import { GetNotes } from "../config/data";
import Searchbar from "../components/searchbar/Searchbar";
import Note from "../components/note/Note";

type Note = {
  _id: string;
  title: string;
  content: string;
  tag: string;
};

export default async function Notes() {
  const notes: Note[] = await GetNotes();
  console.log(notes);
  return (
    <main>
      <Searchbar />
      {notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </main>
  );
}
