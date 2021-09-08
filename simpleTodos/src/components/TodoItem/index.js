// Write your code here
import './index.css'

const TodoItem = props => {
  const {data, onDeleteTodo} = props
  const {id, title} = data
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-item">
      <div className="todo-container">
        <p className="description">{title}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
