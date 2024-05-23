import { deleteNote } from "@/app/config/action";
import Link from "next/link";
import {NoteProps} from "@/app/components/Types/NoteTypes";

export default function NoteComponent(props: NoteProps) {
  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.title}</p>
      <p>{props.note.tag}</p>
      <Link href={`/notes/${props.note._id}`}>
        <button>update</button>
      </Link>
      <form action={deleteNote}>
        <input type="hidden" name="id" value={props.note._id} />
        <button type="submit">delete</button>
      </form>
    </div>
  );
}
