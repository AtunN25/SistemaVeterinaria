import React from "react";
import { useNavigate } from "react-router-dom";

const validAretes = ["M10-002", "M10-005", "M10-007", "M10-010", "M10-012"];

function Dashboard() {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path); // Redirige a la ruta del dashboard
  };

  const handleConcurrentForm = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const arete = prompt("Ingrese el código de arete de la llama:");

    if (arete) {
      if (validAretes.includes(arete)) {
        navigate("/concurrentform");
      } else {
        alert("Código de arete inválido. Por favor, vuelva a intentarlo.");
      }
    }
  };

  return (
    <div>
      <div className="bg-gray-800  justify-start p-2">
        <div className="items-center justify-center space-x-3">
          <div className=" bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-llama-animal-body-icongeek26-flat-icongeek26.png"
              alt="external-llama-animal-body-icongeek26-flat-icongeek26"
            />
            <div className=" px-3 text-left rtl:text-right">
              <div className="mb-1 text-xs">Cantidad de Animales</div>
              <div className="-mt-1 font-sans text-sm font-semibold">27</div>
            </div>
          </div>
          <button className=" bg-green-900  text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/ms-excel.png"
              alt="ms-excel"
            />
            <div className="text-left rtl:text-right px-2">
              <div className="mb-1 text-xs">exportar Sabana</div>
            </div>
          </button>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg justify-start p-2">
        <div className="items-center justify-center space-x-3 flex ">
          <button
            className=" bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/newregister")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-llama-animal-head-icongeek26-outline-gradient-icongeek26.png"
              alt="external-llama-animal-head-icongeek26-outline-gradient-icongeek26"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">+ Nuevo Animal</div>
            </div>
          </button>
          <button
            className=" sm:w-auto bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            onClick={handleConcurrentForm}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/nolan/64/bookmark.png"
              alt="bookmark"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">+ Nuevo Informe</div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex rounded overflow-hidden shadow-lg items-center p-2 space-x-2">
        <button
          type="button"
          className="focus:outline-none text-white bg-cyan-800  hover:bg-cyan-400   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Alpacas
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-cyan-800  hover:bg-cyan-400  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
        >
          Llamas
        </button>

        <button
          type="button"
          className="focus:outline-none text-white bg-cyan-800  hover:bg-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
        >
          Huanacos
        </button>
      </div>
      <div className="">
        <div className="relative overflow-x-auto shadow-md  p-2 rounded-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Arete
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Raza
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Fecha Nacimiento
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Cant Informes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Fecha Ult Reporte
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  S-09
                </th>
                <td className="px-6 py-4 bg-gray-800">Silver</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  H-14
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">4</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  H-16
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  MC-09
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  13/04/2022
                </td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
