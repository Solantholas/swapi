import { Column } from "react-table";
import { IPeople } from "./interfaces/people.interface";

export const peopleTableColumns: Column<IPeople>[] = [
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Birth Year',
    Footer: 'Birth Year',
    accessor: 'birth_year'
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Eye Color',
    Footer: 'Eye Color',
    accessor: 'eye_color'
  },
  {
    Header: 'Hair Color',
    Footer: 'Hair Color',
    accessor: 'hair_color'
  },
  {
    Header: 'Skin Color',
    Footer: 'Skin Color',
    accessor: 'skin_color'
  },
  {
    Header: 'Height',
    Footer: 'Height',
    accessor: 'height'
  },
  {
    Header: 'Mass',
    Footer: 'Mass',
    accessor: 'mass'
  },
  {
    Header: 'Homeworld',
    Footer: 'Homeworld',
    accessor: 'homeworld'
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