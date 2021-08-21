import React from "react";

const style = {
  "background-color": "#c1ffff",
  width: "400px",
  height: "30px",
  "border-radius": "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
