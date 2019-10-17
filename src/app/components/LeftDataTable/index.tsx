import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import * as style from './style.css';
import IDataItem from 'app/IDataItem';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';

interface Props {
  items: IDataItem[];
  isSelected: (item: IDataItem) => boolean;
}
const LeftDataTable: React.FC<Props> = ({ items, isSelected }) => {
  return (
    <ReactTable
      showPagination={false}
      data={items}
      columns={[
        {
          id: 'artNo',
          Header: 'Артикул',
          accessor: (d) => d.artNo
        },
        {
          id: 'name',
          Header: 'Наименование',
          accessor: (d) => d.name,
          Cell: ({ value }) => <TruncatedTextWithHTML value={value} max={41} />
        }
      ]}
      getTrProps={(state, rowInfo, column) => {
        if(isSelected(rowInfo.row))
        return {
          className: style.highlighted
        }
      }}
      defaultPageSize={100}
      className="-striped -highlight"
    />
  );
};

export default observer(LeftDataTable);
