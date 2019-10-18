import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import Checkbox from 'app/base-components/Checkbox';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';
import RightTableModel from 'app/models/RightTableModel';

interface Props {
  model: RightTableModel;
}
interface CellProps {
  value: any;
}

const RightDataTable: React.FC<Props> = ({ model }) => {
  const CheckboxCell: React.FC<CellProps> = ({ value: id }) => {
    return (
      <Checkbox
        isChecked={model.isChecked(id)}
        onChange={(checked) => model.check(id, checked)}
      />
    );
  };
  const DescriptionCell: React.FC<CellProps> = ({ value: item }) => {
    return (
      <div style={{
        whiteSpace: 'normal'
      }}>
          <p>{'Арт.: ' + item.artNo}</p>
          <p>
            <TruncatedTextWithHTML value={item.name} max={100} />
          </p>
          <p>
            <TruncatedTextWithHTML value={item.description} max={264} />
          </p>
      </div>
    );
  };

  return (
    <ReactTable
      showPagination={false}
      showPageSizeOptions={false}
      sortable={false}
      data={model.items}
      columns={[
        {
          Header: undefined,
          id: 'descriptionColumn',
          accessor: (d) => d,
          Cell: DescriptionCell
        },
        {
          Header: undefined,
          accessor: 'id',
          Cell: CheckboxCell,
          width: 35,
          style: {
            alignSelf: 'center'
          }
        }
      ]}
      defaultPageSize={model.items.length}
      className="-striped -highlight"
      getTheadProps={() => ({
        style: {
          height: 0
        }
      })}
    />
  );
};

export default observer(RightDataTable);
