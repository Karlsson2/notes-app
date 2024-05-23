// src/context/NoteProvider.js
"use client";
import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";
import { GetNotes } from "../config/data";

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await GetNotes(); // Fetch notes from your backend
      setNotes(fetchedNotes); // Update the state with the fetched notes
    };

    fetchNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
