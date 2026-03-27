import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { createPortal } from 'react-dom'
const SearchBar = ({ tasks, showSearch, setShowSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.date.includes(searchQuery)
  );

  useEffect(()=>{
    function handleClick(e){
        if(modalRef.current && !modalRef.current.contains(e.target)){
            setShowSearch(false);
        }
    }
    if(showSearch){
        document.addEventListener('mousedown', handleClick);
    }

    return ()=> {
        document.removeEventListener('mousedown', handleClick);
    }
  },[showSearch,setShowSearch]);
  
  if(!showSearch) return null;

  return createPortal(
    <div style={overlaystyle}>
        <div ref={modalRef} style={modalStyle}>
            <input 
            autoFocus
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e)=> searchQuery(e.target.value)}
            style={inputStyle}
            />

            <div style={{maxHeight: "300px", overflowY: "auto"}}>

            </div>
        </div>
    </div>,
        document.body
  );
};

export default SearchBar;
