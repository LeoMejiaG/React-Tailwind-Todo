import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, removerTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(dropableProvider) => (
                <div
                    ref={dropableProvider.innerRef}
                    {...dropableProvider.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md border-b-gray-400 bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(DraggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    removerTodo={removerTodo}
                                    updateTodo={updateTodo}
                                    ref={DraggableProvider.innerRef}
                                    {...DraggableProvider.dragHandleProps}
                                    {...DraggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {dropableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    removerTodo: PropTypes.func,
    updateTodo: PropTypes.func,
};

export default TodoList;
