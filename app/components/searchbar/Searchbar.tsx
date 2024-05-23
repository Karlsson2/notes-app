"use client";
import CreateForm from "../createForm/CreateForm";
import { useState } from "react";

type OnSearchChangeCallback = (query: string) => void;

interface SearchbarProps {
  onSearchChange: OnSearchChangeCallback;
}

export default function Searchbar({ onSearchChange }: SearchbarProps) {
  const [showForm, setShowForm] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    onSearchChange(query);
  }

  function handleClick() {
    setShowForm(true);
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} />{" "}
      <button>Filtrering</button>
      <button onClick={handleClick}>Add new +</button>
      {showForm && <CreateForm setShowForm={setShowForm}></CreateForm>}
    </div>
  );
}
