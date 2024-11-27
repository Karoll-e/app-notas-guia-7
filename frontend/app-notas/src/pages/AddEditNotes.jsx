import React, { useState } from "react";
import TagInput from "../components/TagInput";
import { X } from "lucide-react";

const AddEditNotes = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const editNote = async () => {};
  const addNewNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Por favor introduce un título");
      return;
    }

    if (!content) {
      setError("Por favor introduce una descripción");
      return;
    }

    setError(null);
    // Aquí puedes agregar lógica para guardar la nota.
    console.log({ title, content, tags });

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <X className="w-5 h-5 text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Título"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded resize-none"
          placeholder="Añade una nota..."
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        Agregar nota
      </button>
    </div>
  );
};

export default AddEditNotes;
