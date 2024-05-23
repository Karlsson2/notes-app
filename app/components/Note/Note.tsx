import Link from "next/link";
import Image from "next/image";
import { NoteProps } from "@/app/components/Types/NoteTypes";
import useNotes from "@/app/hooks/useNotes";

export default function NoteComponent(props: NoteProps) {
  const { deleteNote } = useNotes();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    await deleteNote(new FormData(e.target));
  };

  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.content}</p>
      <p>{props.note.tag}</p>
      <Link href={`/notes/${props.note._id}`}>
        <Image src="/icons/edit.svg" width={18} height={18} alt="edit" />
      </Link>
      <form onSubmit={handleDelete}>
        <input type="hidden" name="id" value={props.note._id} />
        <button type="submit">
          <Image src="/icons/delete.svg" width={18} height={18} alt="delete" />
        </button>
      </form>
    </div>
  );
}
