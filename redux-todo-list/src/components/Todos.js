import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (obj) => dispatch(removeTodos(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (obj) => dispatch(completeTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        todo: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div
      style={{
        marginTop: 50,
        gap: 20,
      }}
    >
      <form
        style={{
          marginTop: 50,
          gap: 20,
          display: "flex",
          justifyContent: "center",
          gridAutoColumns: "minmax(100px,auto)",
          backgroundColor: "gray",
          height: 30,
          padding: 10,
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" id="title" />
        <input id="title" type="text" value={todo} onChange={handleChange} />
        <button typ="submit">Add todo</button>
      </form>
      <uil>
        {props.todos.length > 0
          ? props.todos.map((item) => (
              <TodoItem
                item={item}
                updateTodos={props.updateTodo}
                removeTodos={props.removeTodo}
                completeTodos={props.completeTodo}
              ></TodoItem>
            ))
          : null}
      </uil>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
