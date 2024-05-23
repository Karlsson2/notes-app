// These are the types associated with Notes

type Note = {
      _id: string;
      title: string;
      content: string;
      tag: string;
};
type NoteProps = {
      note: Note;
    };

export type { Note, NoteProps}