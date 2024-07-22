import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './routes/Dashboard.jsx';
import Login from './routes/Login.jsx'
import NewRegister from './routes/components/NewRegister.jsx'
import ConcurrentForm from './routes/components/ConcurrentForm.jsx'

import Biometria from './routes/components/Biometria.jsx'
import ClasificacionFibra from './routes/components/ClasificacionFibra.jsx'
import Muestras from './routes/components/Muestras.jsx'

import CapacidadReproductiva from './routes/components/CapaciadadReproductiva.jsx'
import FemaleForm from './routes/components/FemaleForm.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/newregister",
    element: <NewRegister></NewRegister>,
  },
  {
    path: "/concurrentform",
    element: <ConcurrentForm></ConcurrentForm>,
  },
  {
    path: "/muestras",
    element: <Muestras></Muestras>,
  },
  {
    path: "/clasificacionfibra",
    element: <ClasificacionFibra></ClasificacionFibra>,
  },
  {
    path: "/biometria",
    element: <Biometria></Biometria>,
  },
  {
    path: "/capacidadreproductiva",
    element: <CapacidadReproductiva></CapacidadReproductiva>,
  },
  {
    path: "/femaleform",
    element: <FemaleForm></FemaleForm>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
