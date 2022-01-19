import Todo from "./todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map(todo => (
              <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} text={todo.text} />
          )).reverse()}
      </ul>
    </div>
  );
};

export default TodoList;
