import React from 'react';
import 'react-table/react-table.css';
import { observer, inject } from 'mobx-react';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';
import * as style from './style.css';
import LeftTableModel from 'app/models/LeftTableModel';
import { STORE_LEFT_TABLE } from 'app/constants/stores';
import DataTable from 'app/base-components/DataTable';

interface IProps {
  [STORE_LEFT_TABLE]?: LeftTableModel;
}
const LeftDataTable: React.FC<IProps> = (props) => {
  const { STORE_LEFT_TABLE: model } = props;
  return (
    <DataTable
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
      getTheadProps={() => {
        const style = model.count === 0 ? { height: 0 } : null;
        return { style };
      }}
      pageSize={model.count}
      className="-striped -highlight"
    />
  );
};

export default inject(STORE_LEFT_TABLE)(observer(LeftDataTable));
