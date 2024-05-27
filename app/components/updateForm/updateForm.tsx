"use client";
import { updateNote } from "@/app/config/action";
import React from "react";
import styles from "./updateForm.module.css";
import { NoteProps } from "../Types/NoteTypes";
import { useState } from "react";
import { Note } from "../Types/NoteTypes";

type FormElementEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export default function UpdateForm(props: NoteProps) {
  const [formValue, setFormValue] = useState<Note>(props.note);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    updateNote(formData);
  };

  const updateForm = (event: FormElementEvent) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.updateFormWrapper}>
          <div className={styles.formTitle}>Update Note</div>
          <form onSubmit={handleSubmit} className={styles.updateForm}>
            <input name="id" type="hidden" value={formValue._id} />
            <div className={styles.updateFormInputDiv}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={formValue.title}
                onChange={updateForm}
              />
            </div>
            <div
              className={`${styles.updateFormInputDiv} ${styles.updateFormTextareaDiv}`}
            >
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                value={formValue.content}
                onChange={updateForm}
              ></textarea>
            </div>
            <div className={styles.updateFormInputDiv}>
              <label htmlFor="tag">Tag</label>
              <input
                type="text"
                name="tag"
                value={formValue.tag}
                onChange={updateForm}
              />
            </div>
            <button type="submit" className={styles.updateButton}>
              Update Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
