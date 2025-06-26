import TodoItem from './TodoItem';
import { Funnel, Check2All, Clock } from 'react-bootstrap-icons';

function TodoList({ todos, deleteTodo, toggleTodo, filter, setFilter }) {
  const filterOptions = [
    { value: 'all', label: 'Todas', icon: <Funnel className="me-1" /> },
    { value: 'completed', label: 'Completadas', icon: <Check2All className="me-1" /> },
    { value: 'pending', label: 'Pendientes', icon: <Clock className="me-1" /> }
  ];

  return (
    <div className="todo-list-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h6 text-muted mb-0">
          {filter === 'all' && 'Todas las tareas'}
          {filter === 'completed' && 'Tareas completadas'}
          {filter === 'pending' && 'Tareas pendientes'}
        </h2>
        <div className="btn-group btn-group-sm">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`btn ${filter === option.value ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {todos.length === 0 ? (
        <div className="text-center py-4 text-muted">
          <p className="mb-1">No hay tareas {filter !== 'all' && ` ${filter === 'completed' ? 'completadas' : 'pendientes'}`}</p>
          <small>Crea una nueva tarea para comenzar</small>
        </div>
      ) : (
        <ul className="list-group list-group-flush rounded overflow-hidden">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;