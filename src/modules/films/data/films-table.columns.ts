import { Column } from "react-table";
import IFilm from "../components/films-table/interfaces/film.interface";

// basic columns definition
export const filmTableColumns: Column<IFilm>[] = [
  {
    Header: 'Episode',
    Footer: 'Episode',
    accessor: 'episode_id'
  },
  {
    Header: 'Title',
    Footer: 'Title',
    accessor: 'title'
  },
  {
    Header: 'Director',
    Footer: 'Director',
    accessor: 'director'
  },
  {
    Header: 'Release Date',
    Footer: 'Release Date',
    accessor: 'release_date'
  },
  {
    Header: 'URL',
    Footer: 'URL',
    accessor: 'url'
  },
  {
    Header: 'Created',
    Footer: 'Created',
    accessor: 'created'
  },
  {
    Header: 'Last Edited',
    Footer: 'Last Edited',
    accessor: 'edited'
  }
];

// using grouped headers
export const groupedFilmTableColumns: Column<IFilm>[] = [
  {
    Header: 'Episode',
    Footer: 'Episode',
    accessor: 'episode_id'
  },
  {
    Header: 'Title',
    Footer: 'Title',
    accessor: 'title'
  },
  {
    Header: 'Director',
    Footer: 'Director',
    accessor: 'director'
  },
  {
    Header: 'Release Date',
    Footer: 'Release Date',
    accessor: 'release_date'
  },
  {
    Header: 'URL',
    Footer: 'URL',
    accessor: 'url'
  },
  {
    Header: 'Dates',
    Footer: 'Dates',
    columns: [
      {
        Header: 'Created',
        Footer: 'Created',
        accessor: 'created'
      },
      {
        Header: 'Last Edited',
        Footer: 'Last Edited',
        accessor: 'edited'
      }
    ]
  }
]