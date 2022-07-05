import { Route, Routes } from "react-router-dom";
import PeopleTable from "../people-table/people-table.component";

function PeopleRouter() {
  return (
    <Routes>
      <Route path="Table" element={<PeopleTable />} />
    </Routes>
  );
}

export default PeopleRouter;