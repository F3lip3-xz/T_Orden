import { CheckCircle, Circle, Trash, Pencil } from 'react-bootstrap-icons';
import { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className={`list-group-item list-group-item-action ${todo.completed ? 'bg-light' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div 
          className="d-flex align-items-center flex-grow-1"
          onClick={() => toggleTodo(todo.id)}
          style={{ cursor: 'pointer' }}
        >
          {todo.completed ? (
            <CheckCircle className="text-success me-2" size={20} />
          ) : (
            <Circle className="text-secondary me-2" size={20} />
          )}
          <span 
            className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
          >
            {todo.text}
          </span>
        </div>
        
        <div className={`actions ${isHovered ? 'visible' : 'invisible'}`}>
          <button 
            className="btn btn-sm btn-outline-secondary me-1"
            onClick={(e) => {
              e.stopPropagation();
              // Aquí podrías implementar la edición
            }}
          >
            <Pencil size={14} />
          </button>
          <button 
            className="btn btn-sm btn-outline-danger"
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
          >
            <Trash size={14} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;