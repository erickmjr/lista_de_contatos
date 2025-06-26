import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import EstiloGlobal from './styles';
import store from './redux/store';

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
        <Provider store={store}>
            <EstiloGlobal />
            <RouterProvider router={rotas} />
        </Provider>
    );
}

export default App;
