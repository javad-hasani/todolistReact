import styles from "./InputBar.module.css";
import Button from "./Button";

import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { addTodo } from "../features/todoSlice";

function InputBar() {
  const inputRef = useRef(null);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();
    if (!newTodo) return;

    dispatch(addTodo(newTodo));
    setNewTodo("");
    inputRef.current.blur();
  }

  return (
    <form onSubmit={handleAddTodo} className={styles.barContainer}>
      <Button>
        <span> </span> 
      </Button>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          placeholder="یک کار جدید ایجاد کنید..."
          type="text"
          name="add-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
    </form>
  );
}

export default InputBar;
