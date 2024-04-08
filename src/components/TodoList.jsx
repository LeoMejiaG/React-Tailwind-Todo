import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, removerTodo, updateTodo }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md border-b-gray-400 bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removerTodo={removerTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    removerTodo: PropTypes.func,
    updateTodo: PropTypes.func,
};

export default TodoList;
