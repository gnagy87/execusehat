import ExecuseItem from "./ExecuseItem";

const Execuses = (props) => {

  const deleteExecuseHandler = (id) => {
    props.onDeleteExecuse(id);
  }

  return (
    <div>
      {props.execuses.map(execuse => 
        <ExecuseItem
          id={execuse.id}
          title={execuse.title}
          author={execuse.author}
          onDeleteExecuseHandler={deleteExecuseHandler}
        />
      )}
    </div>
  );
}

export default Execuses;
