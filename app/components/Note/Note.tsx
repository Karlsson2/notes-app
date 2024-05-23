import { deleteNote } from "@/app/config/action";
import Link from "next/link";
import Image from "next/image";
import { NoteProps } from "@/app/components/Types/NoteTypes";
import styles from "./note.module.css";

export default function NoteComponent(props: NoteProps) {
  return (
    <div className={styles.noteWrapper}>
      <div className={styles.titleWrapper}>
        <h2>{props.note.title}</h2>
      </div>
      <div className={styles.contentWrapper}>
        <p>{props.note.content}</p>

        <div className={styles.bottomWrapper}>
          <p className={styles.tag}>{props.note.tag.toUpperCase()}</p>
          <div className={styles.operationsWrapper}>
            <Link href={`/notes/${props.note._id}`}>
              <Image
                className={styles.shinyEffect}
                src="/icons/edit.svg"
                width={18}
                height={18}
                alt="edit"
              />
            </Link>
            <div className={styles.bar}></div>

            <form action={deleteNote}>
              <input type="hidden" name="id" value={props.note._id} />
              <button type="submit" className={styles.submitButton}>
                <Image
                  className={styles.shinyEffect}
                  src="/icons/delete.svg"
                  width={18}
                  height={18}
                  alt="edit"
                ></Image>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
