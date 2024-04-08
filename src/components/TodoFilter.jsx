import PropTypes from "prop-types";

const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 text-gray-400 dark:bg-gray-800 transition-all duration-1000">
                <button
                    className={`${filter === "all" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => changeFilter("all")}
                >
                    Todos
                </button>
                <button
                    className={`${filter === "active" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => changeFilter("active")}
                >
                    Activos
                </button>
                <button
                    className={`${filter === "completed" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}
                    onClick={() => changeFilter("completed")}
                >
                    Completados
                </button>
            </div>
        </section>
    );
};

TodoFilter.propTypes = {
    changeFilter: PropTypes.func,
    filter: PropTypes.string,
};

export default TodoFilter;
