import "./App.css";
import al from "./assets/al.jpg";
import { useNavigate } from "react-router-dom";
import Dashboard from './routes/Dashboard.jsx'

function App() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, si la autenticación es exitosa:
    navigate("/dashboard"); // Redirige a la ruta del dashboard
  };

  return (

      
      <div
      className=" h-screen w-full"
      style={{
        backgroundImage: `url(${al})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col  items-center justify-center px-6 py-8 ">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-transparent  dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-blue-opacity rounded-md">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Usuario
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Jimmy"
                    required=""
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleLogin}
                >
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
