import Table from "../../../../shared/components/table.component";
import IFilm from "./interfaces/film.interface";
import useFilms from "../../hooks/use-films.hook";
import { filmTableColumns } from "../../data/films-table.columns";

function FilmsTable() {
  const { data } = useFilms();

  return (
    <Table<IFilm> state={data} gridColumns={filmTableColumns} />
  );
}

export default FilmsTable;
