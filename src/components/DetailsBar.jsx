import styles from "./DetailsBar.module.css";
import Button from "./Button";
import Filter from "./Filter";
import { useWidnowSize } from "../hooks/useWindowSize";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../features/todoSlice";

function DetailsBar() {
  const itemsLeft = useSelector(
    (state) => state.todo.todos.filter((todo) => todo.done !== true).length
  );

  const dispatch = useDispatch();

  function handleClearCompleted() {
    dispatch(clearCompletedTodos());
  }

  const isMobile = useWidnowSize(); // تغییر نام متغیر به "isMobile"

  return (
    <div className={styles.barContainer}>
      <p>{itemsLeft} مورد باقی مانده</p> {/* تغییر در متن */}
      {isMobile && <Filter />} {/* استفاده از isMobile به جای isMoble */}
      <Button onClick={handleClearCompleted}>پاک کردن موارد انجام شده</Button> {/* تغییر در متن */}
    </div>
  );
}

export default DetailsBar;
