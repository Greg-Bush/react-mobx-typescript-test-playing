import React from 'react';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import ReactTable from 'react-table';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';
import * as style from './style.css';
import LeftTableModel from 'app/models/LeftTableModel';

interface Props {
  model: LeftTableModel;
}
const LeftDataTable: React.FC<Props> = ({ model }) => {
  return (
    <ReactTable
      showPagination={false}
      data={model.items}
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
          rowInfo && rowInfo.row.id === model.selectedId
            ? style.highlighted
            : null;
        return { className };
      }}
      defaultPageSize={model.items.length}
      className="-striped -highlight"
    />
  );
};

export default observer(LeftDataTable);
