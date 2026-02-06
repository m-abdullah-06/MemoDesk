import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span>Title</span>
      <div className="note-footer">
        <small>Date</small>
        <small>
          <MdDeleteForever className="delte-icon" size="1.3em" />
        </small>
      </div>
    </div>
  );
};

export default Note;
