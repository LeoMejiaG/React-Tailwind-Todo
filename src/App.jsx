import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
            <header className=" container mx-auto px-4 pt-8">
                <div className=" flex justify-between">
                    <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
                        todo
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Crea un nuevo todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className=" container mx-auto mt-8 px-4">
                <div className="rounded-md border-b-gray-400 bg-white [&>article]:p-4">
                    <article
                        className="flex gap-4 border-b border-b-gray-400
                    "
                    >
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Informacion relevante
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article
                        className="flex gap-4 border-b border-b-gray-400
                    "
                    >
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Informacion relevante
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article
                        className="flex gap-4 border-b border-b-gray-400
                    "
                    >
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Informacion relevante
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4 text-gray-400">
                        <span>5 tareas</span>
                        <button>Eliminar completadas</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4 text-gray-400">
                    <button className="text-blue-600">Todos</button>
                    <button className="hover:text-blue-600">Activar</button>
                    <button className="hover:text-blue-600">Completado</button>
                </div>
            </section>
            <p className="mt-8 text-center text-gray-400">
                Arrastrar y soltar para reordenar la lista
            </p>
        </div>
    );
};

export default App;
