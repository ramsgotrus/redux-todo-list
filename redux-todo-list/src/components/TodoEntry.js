import React from "react";

const TodoEntry = () => {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <form
        style={{
          padding: 40,
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          gap: 20,
        }}
      >
        <label
          style={{
            font: "-moz-initial",
          }}
          htmlFor="Todo"
        >
          Todo
        </label>
        <input
          style={{
            font: "-moz-initial",
            border: "1px solid gray",
            borderRadius: 5,
            height: 30,
            width: 300,
          }}
          type="text"
        ></input>
        <label htmlFor="Checkin">Checkin</label>
        <input
          style={{
            font: "-moz-initial",
            border: "1px solid gray",
            borderRadius: 5,
            height: 30,
            width: 300,
          }}
          type="date"
        ></input>
        <label htmlFor="checkout">Checkout</label>
        <input
          style={{
            font: "-moz-initial",
            border: "1px solid gray",
            borderRadius: 5,
            height: 30,
            width: 300,
          }}
          type="date"
        ></input>
        <button
          style={{
            font: "-moz-initial",
            border: "1px solid gray",
            borderRadius: 5,
            height: 30,
            width: 100,
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoEntry;
