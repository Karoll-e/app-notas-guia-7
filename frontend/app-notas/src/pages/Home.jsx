import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NoteCard from "../components/NoteCard";
import AddEditNotes from "./AddEditNotes";
import { Plus } from "lucide-react";
import Modal from "react-modal";

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const notes = [
    {
      title: "Meeting on Monday",
      date: "Dec 02, 2024",
      content: "lorem",
      tags: "#job",
      isPinned: true,
    },
    {
      title: "Grocery shopping",
      date: "Dec 03, 2024",
      content: "Buy milk, bread, and eggs.",
      tags: "#personal",
      isPinned: false,
    },
    {
      title: "Workout Plan",
      date: "Dec 04, 2024",
      content: "Run 5km and yoga session.",
      tags: "#fitness",
      isPinned: false,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {notes.map((note, index) => (
            <NoteCard
              key={index}
              title={note.title}
              date={note.date}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => {
                setOpenAddEditModal({
                  isShown: true,
                  type: "edit",
                  data: note,
                });
              }}
              onDelete={() => {
                console.log("Delete note:", note.title);
              }}
              onPinNote={() => {
                console.log("Pin note:", note.title);
              }}
            />
          ))}
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <Plus className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {
          setOpenAddEditModal({ isShown: false, type: "add", data: null });
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Agregar o editar nota"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
}

export default Home;
