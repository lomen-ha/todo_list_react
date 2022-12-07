import { createContext, useContext, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';

export const TodosValueContext = createContext();
export const TodosActionsContext = createContext();

export const TodosProvider = ({ children }) => {
  const idRef = useRef(3);
  const [todos, setTodos] = useImmer([
    {
      id: 1,
      text: '밥먹기',
      done: true,
    },
    {
      id: 2,
      text: '책읽기',
      done: false,
    },
  ]);
  const actions = useMemo(
    () => ({
      add(text) {
        const id = idRef.current;
        idRef.current += 1;
        setTodos((prev) => {
          prev.push({ id, text, done: false });
        });
      },
      toggle(id) {
        setTodos((prev) => {
          const todo = prev.find((todo) => todo.id === id);
          todo.done = !todo.done;
        });
      },
      remove(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      },
      completed() {
        setTodos((prev) => prev.filter((todo) => todo.done === true));
      },
      active() {
        setTodos((prev) => prev.filter((todo) => todo.done === false));
      },
    }),
    []
  );
  return (
    <TodosActionsContext.Provider value={actions}>
      <TodosValueContext.Provider value={todos}>
        {children}
      </TodosValueContext.Provider>
    </TodosActionsContext.Provider>
  );
};

export const useTodosValue = () => {
  const value = useContext(TodosValueContext);
  if (value === undefined)
    throw new Error('useTodosValue should be used within MyContext.Provider');
  return value;
};

export const useTodosActions = () => {
  const value = useContext(TodosActionsContext);
  if (value === undefined)
    throw new Error('useTodosActions should be used within MyContext.Provider');
  return value;
};
