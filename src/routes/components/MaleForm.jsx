import React from "react";

function MaleForm() {
  return (
    <div>
  
        <h2 className="text-lg font-bold leading-7 text-gray-900">
          Medicion testicular
        </h2>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Testiculo derecho
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.6cm L:2cm"
        />
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Testiculo izquierdo
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />
        <h2 className="text-lg font-bold leading-7 text-gray-900">Capacidad Reproductiva</h2>
        {/* Condición Corporal */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Sonidos graduales
          </label>
          <select
            id="bodyCondition"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="bajo">bajo</option>
            <option value="medio">medio</option>
            <option value="salto">alto</option>

          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
          Impetu en segundos
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />

<label className="block text-sm font-medium leading-6 text-gray-900">
          Derribo en segundos
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />
<label className="block text-sm font-medium leading-6 text-gray-900">
          Tiempo de copula en segundos
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />

<label className="block text-sm font-medium leading-6 text-gray-900">
          Tiempo hasta la penetracion en segundos
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />

        </div>

        <h2 className="text-lg font-bold leading-7 text-gray-900">Muestra de semen</h2>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Numero de maniqui
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A:2.4cm L:2cm"
        />

        <label className="block text-base font-medium leading-6 text-gray-900">Tiempo de coleccion</label>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Inicio
          </label>
          <div className="mt-2">
            <input
              type="time"
              name="startTime"
              id="startTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="00:00"
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Final
          </label>
          <div className="mt-2">
            <input
              type="time"
              name="endTime"
              id="endTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="00:00"
            />
          </div>
        </div> 

        <label className="block text-base font-medium leading-6 text-gray-900">Temperatura en C - vagina artificial</label>

        {/* Input de Número de Inicio */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Número de Inicio
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="startNumber"
              id="startNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="0"
            />
          </div>
        </div>

        {/* Input de Número de Final */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Número de Final
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="endNumber"
              id="endNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="0"
            />
          </div>
        </div>

        {/* Select de Color */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Selecciona un Color
          </label>
          <div className="mt-2">
            <select
              name="colorSelect"
              id="colorSelect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="blanco-traslucido">Blanco Traslúcido</option>
              <option value="blanco-lechoso">Blanco Lechoso</option>
              <option value="blanco-cristalino">Blanco Cristalino</option>
            </select>
          </div>
        </div>
        
    
    </div>
  );
}

export default MaleForm;
