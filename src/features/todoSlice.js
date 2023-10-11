import { createSlice } from "@reduxjs/toolkit";



const loadTodosFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Error loading todos from local storage:", error);
    return [];
  }
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      prepare(newTodo) {
        return {
          payload: { content: newTodo, done: false, id: Math.random() },
        };
      },
      reducer(state, action) {
        state.todos = [action.payload, ...state.todos];
        localStorage.setItem("todos", JSON.stringify(state.todos));
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    doneTodo(state, action) {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);

      targetTodo.done = !targetTodo.done;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => todo.done !== true);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    filterAll(state) {
      state.filter = "all";
    },
    filterActive(state) {
      state.filter = "active";
    },
    filterCompleted(state) {
      state.filter = "completed";
    },
  },
});

export const selectFilteredTodos = (state) => {
  const { todos, filter } = state.todo;
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.done);
    case "completed":
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
};

export const {
  addTodo,
  deleteTodo,
  doneTodo,
  clearCompletedTodos,
  filterAll,
  filterActive,
  filterCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
