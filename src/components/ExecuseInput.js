import React, { useState } from "react";
import Wrapper from "./helpers/Wrapper";

const ExecuseInput = props => {

  const [enteredExecuse, setEnteredExecuse] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [addExecuseFlag, setAddExecuseFlag] = useState(false);

  const execuseFlagChangeHandler = () => {
    setAddExecuseFlag(true);
  };

  const cancelButtonHandler = () => {
    setAddExecuseFlag(false);
  };

  const execuseChangeHandler = (event) => {
    setEnteredExecuse(event.target.value);
  };

  const nameChnageHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitExecuseHandler = (event) => {
    event.preventDefault();
    props.onSaveExecuse({
      id: Math.random(),
      title: enteredExecuse,
      author: enteredName
    });
    setEnteredExecuse('')
    setEnteredName('');
    setAddExecuseFlag(false);
  };

  return (
    <>
      {addExecuseFlag &&
      <form onSubmit={submitExecuseHandler}>
        <div>
          <label>Kifogás</label>
          <input 
            type="text"
            value={enteredExecuse}
            onChange={execuseChangeHandler}
          />
        </div>
        <div>
          <label>Név</label>
          <input 
            type="text"
            value={enteredName}
            onChange={nameChnageHandler}/>
        </div>
        <div>
          <button type='submit'>Mentés</button>
          <button onClick={cancelButtonHandler}>Mégsem</button>
        </div>
      </form>}
      {!addExecuseFlag && <button onClick={execuseFlagChangeHandler}>Kifogás hozzáadása</button>}
    </>
  );
}

export default ExecuseInput;
