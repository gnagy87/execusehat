import React from "react";

const ExecuseItem = (props) => {

  const deleteItem = () => {
    props.onDeleteExecuseHandler(props.id);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <button onClick={deleteItem}>Törlöm a kifogást</button>
    </div>
  );
}

export default ExecuseItem;
