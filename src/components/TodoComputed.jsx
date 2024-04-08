import PropTypes from "prop-types";

const TodoComputed = ({ computedItems, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800  transition-all duration-1000">
            <span className="text-gray-400">{computedItems} pendiente</span>
            <button className="text-gray-400 " onClick={clearCompleted}>Eliminar completadas</button>
        </section>
    );
};

TodoComputed.propTypes = {
    computedItems: PropTypes.number,
    clearCompleted: PropTypes.func,
};

export default TodoComputed;
