import { deleteNote } from "@/app/config/action";
import Link from "next/link";
import Image from "next/image";
import {NoteProps} from "@/app/components/Types/NoteTypes";

export default function NoteComponent(props: NoteProps) {
  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.title}</p>
      <p>{props.note.tag}</p>
      <Link href={`/notes/${props.note._id}`}>
        <Image src="/icons/edit.svg" width={18} height={18} alt="edit" />
      </Link>
      <form action={deleteNote}>
        <input type="hidden" name="id" value={props.note._id} />
        <button type="submit">
          <Image
            src="/icons/delete.svg"
            width={18}
            height={18}
            alt="edit"
          ></Image>
        </button>
      </form>
    </div>
  );
}
