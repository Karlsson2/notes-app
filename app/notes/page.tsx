"use client";
import { useState, useContext } from "react";
import { GetNotes } from "../config/data";
import Searchbar from "../components/searchbar/Searchbar";
import NoteComponent from "../components/Note/Note";
import { Note } from "@/app/components/Types/NoteTypes";
import NoteContext from "../context/NoteContext";

export default function Notes() {
  const { notes, setNotes } = useContext(NoteContext);

  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(notes);
  console.log("test");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const filtered = notes.filter(
      (note: any) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <main>
      <Searchbar onSearchChange={handleSearchChange} />{" "}
      {/* Pass the function as a prop */}
      {notes.map((note: any) => (
        <NoteComponent key={note._id} note={note} />
      ))}
    </main>
  );
}
