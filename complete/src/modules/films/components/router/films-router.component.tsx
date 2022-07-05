import { Route, Routes } from "react-router-dom";
import FilmsTable from "../films-table/films-table.component";

function FilmsRouter() {
  return (
    <Routes>
      <Route path="Table" element={<FilmsTable />} />
    </Routes>
  );
}

export default FilmsRouter;