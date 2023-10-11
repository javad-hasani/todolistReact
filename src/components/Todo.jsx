import Button from "./Button";
import styles from "./Todo.module.css";

import { deleteTodo, doneTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleDone() {
    dispatch(doneTodo(todo.id));
  }

  return (
    <li className={styles.todoWrapper}>
      <Button
        onClick={handleDone}
        className={`${todo.done ? styles.checkedCircle : ""} ${styles.circle}`}
      >
        <span></span>
      </Button>
      <p className={todo.done ? styles.checked : ""}>{todo.content}</p>
      <Button onClick={handleDelete} className={styles.cross}>
        <img src="./images/icon-cross.svg" alt="Icon cross" />
      </Button>
    </li>
  );
}

export default Todo;
