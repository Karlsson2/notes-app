import { addNote } from "@/app/config/action";
import React from "react";
import styles from "./createform.module.css";
import { useEffect } from "react";
import Image from "next/image";

interface CreateFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateForm({ setShowForm }: CreateFormProps) {
  function handleClose() {
    setShowForm(false);
  }

  useEffect(() => {
    // Disable scroll when component mounts
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    // Enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "100%";
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { title, content, tag } = Object.fromEntries(formData);
    addNote(formData);
    handleClose();
  };

  return (
    <>
      <div className={styles.blurWrapper}></div>
      <div className={styles.createFormWrapper}>
        <button className={styles.closeButton} onClick={handleClose}>
          <Image src="/icons/close.svg" width={32} height={32} alt="edit" />
        </button>
        <div className={styles.formTitle}>New Sticky</div>
        <form
          onSubmit={handleSubmit}
          id="createForm"
          className={styles.createForm}
        >
          <div className={styles.createFormInputDiv}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>
          <div
            className={`${styles.createFormInputDiv} ${styles.createFormTextareaDiv}`}
          >
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              placeholder="Content"
            ></textarea>
          </div>
          <div className={styles.createFormInputDiv}>
            <label htmlFor="tag">Tag name</label>
            <input type="text" name="tag" id="tag" placeholder="Tag name" />
          </div>
          <button type="submit" className={styles.createFormButton}>
            Create Note
          </button>
        </form>
      </div>
    </>
  );
}
