import { useState } from "react/cjs/react.development";
import ExecuseInput from "./components/ExecuseInput";
import Execuses from "./components/Execuses";

const App = () => {

  const [execuses, setExecuses] = useState([]);

  const saveExecuse = (execuse) => {
    setExecuses((execuses) => {
      return [execuse, ...execuses];
    })
  };

  const deleteExecuse = (id) => {
    setExecuses(execuses.filter(execuse => execuse.id !== id));
  };

  return (
    <div>
      <ExecuseInput onSaveExecuse={saveExecuse}/>
      <Execuses
        execuses={execuses}
        onDeleteExecuse={deleteExecuse}
      />
    </div>
  );
}

export default App;
