
type NoteProps = {
    note: {
        _id: string;
        title: string;
        content: string;
        tag: string;
        };
};

export default function Note( props: NoteProps ) {


  return (
    <div>
        <h2>{props.note.title}</h2>
        <p>{props.note.content}</p>
        <p>{props.note.tag}</p>
    </div>
  );
}
