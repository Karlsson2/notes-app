import { addNote } from "@/app/config/action";
import React from "react";

interface CreateFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateForm({ setShowForm }: CreateFormProps) {
  function handleClose() {
    setShowForm(false);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { title, content, tag } = Object.fromEntries(formData);
    addNote(formData);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleClose}>X</button>
      <form onSubmit={handleSubmit} id="createForm">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="Content"
          ></textarea>
        </div>
        <div>
          <label htmlFor="tag">Tag name</label>
          <input type="text" name="tag" id="tag" placeholder="Tag name" />
        </div>
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}
