import { useState } from 'react';
import { useTodosActions } from '../context/Todos';

export default function Input() {
  const [text, setText] = useState('');
  const { add } = useTodosActions();
  const handleSubmit = (e) => {
    e.preventDefault();
    add(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
