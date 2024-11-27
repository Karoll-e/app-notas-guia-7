import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Titulo"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded resize-none"
          placeholder="Añade una nota..."
          rows={10}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">TAGS</label>
      </div>

      <button className="btn-primary font-medium mt-5 p-3" onClick={()=>{}}>
        Agregar nota
      </button>
    </div>
  );
};

export default AddEditNotes;
