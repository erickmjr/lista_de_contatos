import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import EstiloGlobal from './styles';

const rotas = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/Visualizacao',
        element: <Visualizacao />,
    },
    {
        path: '/Cadastro',
        element: <Cadastro />,
    },
]);

function App() {
    return (
        <>
            <EstiloGlobal />
            <div className="container">
                <RouterProvider router={rotas} />
            </div>
        </>
    );
}

export default App;
