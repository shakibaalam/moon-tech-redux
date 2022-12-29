import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import ProductProvider from './contex/ProductProvider';

function App() {
  
  return (
      <ProductProvider>
      <RouterProvider router={routes}></RouterProvider>
      </ProductProvider>
  );
}

export default App;
