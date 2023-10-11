import styles from "./Filter.module.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  filterActive,
  filterAll,
  filterCompleted,
} from "../features/todoSlice";

import { useSelector } from "react-redux/es/hooks/useSelector";

function Filter({ isMobile }) {
  const dispatch = useDispatch();
  const toFiltered = useSelector((state) => state.todo.filter);

  function handleAllFilter() {
    dispatch(filterAll());
  }

  function handleActiveFilter() {
    dispatch(filterActive());
  }

  function handleCompletedFilter() {
    dispatch(filterCompleted());
  }

  return (
    <div
      className={`${!isMobile ? "" : styles.desktopFilter} ${styles.filter}`}
    >
      <Button
        className={toFiltered === "all" ? styles.btnActive : ""}
        onClick={handleAllFilter}
      >
        همه
      </Button>
      <Button
        className={toFiltered === "active" ? styles.btnActive : ""}
        onClick={handleActiveFilter}
      >
        فعال
      </Button>
      <Button
        className={toFiltered === "completed" ? styles.btnActive : ""}
        onClick={handleCompletedFilter}
      >
        تکمیل شده
      </Button>
    </div>
  );
}

export default Filter;
