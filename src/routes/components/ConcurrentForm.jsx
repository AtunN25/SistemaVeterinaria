import React from "react";
import { useNavigate } from "react-router-dom";

import FemaleForm from '../components/FemaleForm'
import Male from '../components/MaleForm'


const today = new Date();
today.setDate(today.getDate() - 1); // Restar un día
const formattedDate = today.toISOString().split("T")[0];

function ConcurrentForm() {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path); // Redirige a la ruta del dashboard
  };



  const sexo = "macho";

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Formulario Concurrente
      </h2>

      {/*} <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Arete : 
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ingrese el codigo de arete"
          />
        <br></br>
        <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            onClick={() => handleButtonClick("/dashboard")}
          >
            Enviar cod arete
          </button>
        </div>
*/}

      <form>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Fecha de Registro
        </label>
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            type="date"
            name="date"
            defaultValue={formattedDate}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          ></input>
        </div>
        {/* Condición Corporal */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Condición Corporal
          </label>
          <select
            id="bodyCondition"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            C. Dentaria de boca
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: llena"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Caninos
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: 2 caninos(1arriba 1 abajo)"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Peso
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
          />
        </div>

        <h2 className="text-lg font-bold leading-7 text-gray-900">Biometria</h2>

        {/* Altura de Grupa */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de Cabeza
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de grupa"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Ancho de Cabeza
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de grupa"
          />
        </div>

        {/* Orejas */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de oreja
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese orejas"
          />
        </div>

        {/* Orejas */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de cuello
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese orejas"
          />
        </div>

        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Longitud del Cuerpo
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        {/* Altura de Cruz */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Altura de Cruz
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de cruz"
          />
        </div>

        {/* Ancho de Grupa */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Ancho de Grupa
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese ancho de grupa"
          />
        </div>

        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Altura de grupa
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Circunferencia de cuerpo
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        {/* Perímetro Torácico */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Perímetro Torácico
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese perímetro torácico"
          />
        </div>

        {/* Isquiones */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Isquiones
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese isquiones"
          />
        </div>

        {/* Comisura Vulvar */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Comisura Vulvar
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese comisura vulvar"
          />
        </div>

        {/* Tren Anterior */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Tren Anterior
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese tren anterior"
          />
        </div>

        {/* Tren Posterior */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Tren Posterior
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese tren posterior"
          />
        </div>

        {/* Observaciones */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Observaciones
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese observaciones"
          />
        </div>

        <h2 className="text-lg font-bold leading-7 text-gray-900">Clasificacion de fibra</h2>

        <label className="block text-sm font-medium leading-6 text-gray-900">
              Densidad
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="buena">buena</option>
              <option value="alta">alta</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Defincion
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="buena">buena</option>
              <option value="alta">alta</option>
            </select>


            <label className="block text-sm font-medium leading-6 text-gray-900">
              Calce
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="buena">buena</option>
              <option value="alta">alta</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Uniformidad
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="buena">buena</option>
              <option value="alta">alta</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Tuco
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="no">no</option>
            </select>

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Color
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="cafe">cafe</option>
              <option value="blanco lechoso">blanco lechoso</option>
              <option value="blanco con mancha">blanco con mancha</option>
     
            </select>
        
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Clase
            </label>
            <select
              id="animalType"
              name="animalType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

            {sexo === "hembra" ? (
                <FemaleForm> </FemaleForm>
            ): (
                <Male></Male>
            )}

        <div className="mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            onClick={() => handleButtonClick("/dashboard")}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConcurrentForm;
