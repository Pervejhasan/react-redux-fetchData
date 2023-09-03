import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h2>TODOS App</h2>
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error.message}</h4>}
      {/* {todos && todos.map((todo) => <h4 key={todo.id}>{todo.title}</h4>)} */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "10px",
        }}
      >
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article
                key={id}
                style={{
                  border: "1px solid gray",
                  margin: "10px",
                  backgroundColor: "#293462",
                }}
              >
                <h5>{id}</h5>
                <h4>{title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
