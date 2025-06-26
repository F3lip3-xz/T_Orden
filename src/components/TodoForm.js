import { useState } from 'react';
import { PlusCircle } from 'react-bootstrap-icons';

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className={`input-group ${isFocused ? 'shadow-sm' : ''}`}>
        <input
          type="text"
          className="form-control border-end-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="¿Qué necesitas hacer hoy?"
          aria-label="Nueva tarea"
        />
        <button 
          type="submit" 
          className="btn btn-primary d-flex align-items-center gap-2"
          disabled={!inputValue.trim()}
        >
          <PlusCircle size={18} />
          <span>Añadir</span>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;