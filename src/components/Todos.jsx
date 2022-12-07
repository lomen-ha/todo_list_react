import { useTodosActions, useTodosValue } from '../context/Todos';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todos() {
  const { toggle, remove } = useTodosActions();
  const todos = useTodosValue();
  console.log(todos);
  return (
    <div className='w-full p-4'>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <li className='flex justify-between'>
            <label htmlFor={todo.id}>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={() => toggle(todo.id)}
                id={todo.id}
              />
              <span className='pl-2 text-xl'>{todo.text}</span>
            </label>
            <button onClick={() => remove(todo.id)}>
              <FaTrashAlt />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
