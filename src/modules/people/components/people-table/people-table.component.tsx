import Table from "../../../../shared/components/table.component";
import { IPeople } from "../../data/interfaces/people.interface";
import usePeople from "../../hooks/use-people.hook";
import { peopleTableColumns } from "../../data/people-table.columns";

function PeopleTable() {
  const response = usePeople();

  return (
    <Table<IPeople> state={response.data} gridColumns={peopleTableColumns} />
  )
}

export default PeopleTable;