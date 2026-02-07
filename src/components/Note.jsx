import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, id, handleDeleteNote, color }) => {
  return (
    <div
      className={`note ${color}`}
      style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
    >
      <span>{text}</span>
      <div className="note-footer">
        <small className="note-footer-date">{date}</small>
        <small>
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </small>
      </div>
    </div>
  );
};

export default Note;
