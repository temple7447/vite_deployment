import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexHome from './Component/HOME/IndexHome';
import Uniques from './Component/Uniques';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Uniques />} >
      <Route index element={<IndexHome />} />

      </Route>
    </Routes>
  );
}

export default App;
