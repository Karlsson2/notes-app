"use client";
import { useState, useEffect } from "react";
import { GetNotes } from "../config/data";
import Searchbar from "../components/Searchbar/Searchbar";
import NoteComponent from "../components/Note/Note";
import { Note } from "@/app/components/Types/NoteTypes";

export default function Notes() {
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchAndSetNotes = async () => {
    const notes = await GetNotes();
    setFilteredNotes(notes);
  };
  useEffect(() => {
    fetchAndSetNotes();
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const filtered = filteredNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <main>
      <Searchbar onSearchChange={handleSearchChange} />{" "}
      {/* Pass the function as a prop */}
      {filteredNotes.map((note) => (
        <NoteComponent key={note._id} note={note} />
      ))}
    </main>
  );
}
