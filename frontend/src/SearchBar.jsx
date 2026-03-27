import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
const SearchBar = ({ tasks, showSearch, setShowSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const modalRef = useRef();

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.date.includes(searchQuery),
  );

  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    if (showSearch) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showSearch, setShowSearch]);

  if (!showSearch) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-24 z-50">
      <div ref={modalRef} className="w-[500px] bg-white rounded-lg shadow-lg p-3">
        <input
          autoFocus
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 outline-none border-b"
        />

        <div className="max-h-[300px] overflow-y-auto">
          {filteredTasks.map((task, index) => (
            <div key={index}>
              <p>{task.title}</p>
              <p>{task.date}</p>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default SearchBar;
