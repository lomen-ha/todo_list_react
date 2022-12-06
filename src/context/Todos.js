import { createContext, useContext, useMemo, useRef, useState } from 'react';

export const TodosValueContext = createContext();
export const TodosActionsContext = createContext();

export const TodosProvider = ({ children }) => {
  const idRef = useRef(3);
  const [todos, setTodos] = useState([
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
        setTodos((prev) => [...prev, { id, text, done: false }]);
      },
      toggle(id) {
        setTodos((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
          )
        );
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
