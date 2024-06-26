// DummyNote.jsx
import { DummyNoteType } from "../Types/DummyNote";
import styles from "./dummynote.module.css";
import Image from "next/image";

export default function DummyNote(props: DummyNoteType) {
  return (
    <div className={`${styles.noteWrapper} ${styles[props.class]}`}>
      <div className={styles.titleWrapper}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.contentWrapper}>
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
        <div className={styles.bottomWrapper}>
          <p className={styles.tag}>{props.tag.toUpperCase()}</p>
          <div className={styles.operationsWrapper}>
            <Image
              className={styles.shinyEffect}
              src="/icons/edit.svg"
              width={18}
              height={18}
              alt="edit"
            />
            <div className={styles.bar}></div>
            <div>
              <button type="submit" className={styles.submitButton}>
                <Image
                  className={styles.shinyEffect}
                  src="/icons/delete.svg"
                  width={18}
                  height={18}
                  alt="delete"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
