import { useContext } from "react";
import NoteContext from "../context/NoteContext";
import {
  addNote as serverAddNote,
  updateNote as serverUpdateNote,
  deleteNote as serverDeleteNote,
} from "@/app/config/action";

const useNotes = () => {
  const { dispatch } = useContext(NoteContext);

  const addNote = async (formData) => {
    try {
      await serverAddNote(formData);
      const newNote = Object.fromEntries(formData);
      dispatch({ type: "ADD_NOTE", payload: newNote });
    } catch (error) {
      console.error("Failed to add note", error);
    }
  };

  const updateNote = async (formData) => {
    try {
      await serverUpdateNote(formData);
      const updatedNote = Object.fromEntries(formData);
      dispatch({ type: "UPDATE_NOTE", payload: updatedNote });
    } catch (error) {
      console.error("Failed to update note", error);
    }
  };

  const deleteNote = async (formData) => {
    console.log("reee");
    try {
      await serverDeleteNote(formData);

      const formDataObject = Object.fromEntries(formData);
      const { id } = formDataObject;
      console.log("id:" + id);
      if (id) {
        console.log("id:" + id);
        dispatch({ type: "DELETE_NOTE", payload: id });
      } else {
        console.error(
          "Failed to delete note: ID not found in formData",
          formDataObject
        );
      }
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };

  return { addNote, updateNote, deleteNote };
};

export default useNotes;
