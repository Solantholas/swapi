/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import { Column, useTable } from "react-table";
import Loader from "./loader.component";

export interface IGridProps<T extends object> {
  state: T[],
  gridColumns: Column<T>[]
}

function Table<T extends object>({ state, gridColumns }: IGridProps<T>) {

  if (!state) {  
    return <Loader />;
  }

  const [columns, data] = useMemo(() => {
    return [gridColumns, state]
  }, [state]);

  const { 
    getTableProps, 
    getTableBodyProps,
    headerGroups, 
    footerGroups,
    rows, 
    prepareRow 
  } = useTable({
    columns, 
    data
  });

  function buildTableHead() {
    return <thead>
      {headerGroups.map((headerGroup) => {
        return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => {
              return (
                <th {...header.getHeaderProps()}>
                  {header.render('Header')}
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  }

  function buildTableBody() {
    return <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  }

  function buildTableFooter() {
    return (
      <tfoot>
        {footerGroups.map((footerGroup) => {
          return (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((header) => {
                return (
                  <td {...header.getFooterProps()}>
                    {header.render('Footer')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    );
  }

  return (
    <BootstrapTable {...getTableProps()} striped bordered hover>
      {buildTableHead()}
      {buildTableBody()}
      {buildTableFooter()}
    </BootstrapTable>
  )
}

export default Table;