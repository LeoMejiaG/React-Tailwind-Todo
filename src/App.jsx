import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//     { id: 1, title: "Dormir 8 horas", completed: true },
//     { id: 2, title: "Ir al Gym", completed: false },
//     { id: 3, title: "Desayunar", completed: true },
//     { id: 4, title: "Darle comida a los peces", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            complete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removerTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItems = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className=" container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterTodos()}
                    removerTodo={removerTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    computedItems={computedItems}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center text-gray-400 dark:text-gray-400">
                Arrastrar y soltar para reordenar la lista
            </footer>
        </div>
    );
};

export default App;
