import { useRecoilValue } from "recoil";
import { filteredTodos } from "../state/selector";

export default function TodoCheck() {
  const todoList = useRecoilValue(filteredTodos);

  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo) => <ul key={todo.id}>{todo.title}</ul>)
      ) : (
        <p>No todos to show</p>
      )}
    </div>
  );
}
