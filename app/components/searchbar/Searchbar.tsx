"use client";
import CreateForm from "../createForm/CreateForm";
import { useState } from "react";

export default function Searchbar() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(true);
  }

  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>Filtrering</button>
      <button onClick={handleClick}>Add new +</button>
      {showForm && <CreateForm setShowForm={setShowForm}></CreateForm>}
    </div>
  );
}
