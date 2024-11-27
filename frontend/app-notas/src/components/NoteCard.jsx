import React from "react";
import { Pin, Pencil, Trash2 } from "lucide-react";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <Pin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>
        <div className="flex items-center gap-3">
          <Pencil className="w-4 h-4 icon-btn hover:text-green-600" onClick={onEdit} />
          <Trash2 className="w-4 h-4 icon-btn hover:text-red-500" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
