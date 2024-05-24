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
    <div className={styles.formContainer}>
      <div className={styles.updateFormWrapper}>
        <div className={styles.formTitle}>Update Note</div>
        <form action={updateNote} className={styles.updateForm}>
          <input name="id" type="hidden" value={note._id} />
          <div className={styles.updateFormInputDiv}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder={note.title} />
          </div>
          <div
            className={`${styles.updateFormInputDiv} ${styles.updateFormTextareaDiv}`}
          >
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              placeholder={note.content}
            ></textarea>
          </div>
          <div className={styles.updateFormInputDiv}>
            <label htmlFor="tag">Tag</label>
            <input type="text" name="tag" placeholder={note.tag} />
          </div>
          <button type="submit" className={styles.updateButton}>
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
}
