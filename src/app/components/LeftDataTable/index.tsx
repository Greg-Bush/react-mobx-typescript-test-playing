import React from 'react';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import IDataItem from 'app/IDataItem';
import ReactTable from 'react-table';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';
import * as style from './style.css';

interface Props {
  items: IDataItem[];
  selectedId: number;
}
const LeftDataTable: React.FC<Props> = ({ items, selectedId }) => {
  return (
    <ReactTable
      showPagination={false}
      data={items}
      columns={[
        {
          accessor: 'id',
          show: false
        },
        {
          Header: 'Артикул',
          accessor: 'artNo',
          style: {
            textAlign: 'center',
            alignSelf: 'center'
          }
        },
        {
          Header: 'Наименование',
          accessor: 'name',
          Cell: ({ value }) => <TruncatedTextWithHTML value={value} max={41} />,
          style: {
            whiteSpace: 'normal'
          }
        }
      ]}
      getTrProps={(state, rowInfo, column) => {
        const className =
          rowInfo && rowInfo.row.id === selectedId ? style.highlighted : null;
        return { className };
      }}
      defaultPageSize={items.length}
      className="-striped -highlight"
    />
  );
};

export default observer(LeftDataTable);
