import './App.css';
import HomePage from 'pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { DETAILS, HOME, NOMATCH } from 'consts/routes';
import DetailsPage from 'pages/details/DetailsPage';
import NoMatchPage from 'pages/noMatch/NoMatchPage';

function App() {
  return (
    <div data-theme='default'>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={DETAILS} element={<DetailsPage />} />
        <Route path={NOMATCH} element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
