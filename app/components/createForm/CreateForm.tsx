import { addNote } from "@/app/config/action";

export default function CreateForm() {
  return (
    <div>
        <form action={addNote}>
            <div>
                <label htmlFor=""></label>
                <input type="text" name="title" placeholder="Title" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" name="content" placeholder="Content" />
            </div>
            <div>
                <label htmlFor=""></label>
                <input type="text" name="tag" placeholder="Tag name" />
            </div>
            <button type="submit">Create Note</button>
        </form>
    </div>
  );
}
