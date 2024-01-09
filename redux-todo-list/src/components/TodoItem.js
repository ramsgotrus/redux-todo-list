import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = ({ item, updateTodos, completeTodos, removeTodos }) => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "minmax(100px,auto)",
        justifyContent: "center",
        gridAutoFlow: "column",
        gap: 100,
        padding: 2,
        marginTop: 30,
      }}
    >
      <span>{item.todo}</span>
      <button>
        <AiFillEdit />
      </button>
      <button>
        <IoCheckmarkDoneSharp />
      </button>
      <button>
        <IoClose />
      </button>
    </div>
  );
};

export default TodoItem;
