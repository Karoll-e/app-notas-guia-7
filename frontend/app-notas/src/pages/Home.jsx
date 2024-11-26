import React from "react";
import NavBar from "../components/NavBar";
import NoteCard from "../components/NoteCard";
import { Plus } from 'lucide-react';

function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meeting on Monday"
            date="Dec 02, 2024"
            content="lorem"
            tags="#job"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meeting on Monday"
            date="Dec 02, 2024"
            content="lorem"
            tags="#job"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meeting on Monday"
            date="Dec 02, 2024"
            content="lorem"
            tags="#job"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" onClick={()=>{}}>
        <Plus className="text-[32px] text-white"/>
      </button>
    </>
  );
}

export default Home;
