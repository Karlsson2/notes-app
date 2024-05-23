import { GetNotes } from "@/app/config/data";
import { updateNote } from "@/app/config/action";
import { Note } from "@/app/components/Types/NoteTypes";
import styles from "./note.module.css";

type Params = {
  params: { id: String };
};

export default async function NotePage(params: Params) {
  const notes = await GetNotes();
  const slug = params.params.id;
  const note = notes.find((note: Note) => note._id === slug);

  return (
    <main>
      <div>
        <form action={updateNote}>
          <input name="id" type="hidden" value={note._id} />
          <div>
            <label htmlFor=""></label>
            <input type="text" name="title" placeholder={note.title} />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="content" placeholder={note.content} />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="tag" placeholder={note.tag} />
          </div>
          <button type="submit">Update Note</button>
        </form>
      </div>
    </main>
  );
}
