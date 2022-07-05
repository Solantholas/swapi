import { Route, Routes } from 'react-router-dom';
import Films from '../../modules/films/films.page';
import Home from '../../modules/home/home.page';
import People from '../../modules/people/people.page';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Films/*" element={<Films />}></Route>
      <Route path="People/*" element={<People />}></Route>
    </Routes>
  );
}

export default Routing;