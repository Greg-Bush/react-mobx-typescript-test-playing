import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import IDataItem from 'app/IDataItem';
import Checkbox from 'app/base-components/Checkbox';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';

interface Props {
  items: IDataItem[];
  check: (id: number, value: boolean) => void;
  isChecked: (id: number) => boolean;
}
interface CellProps {
  value: any;
}

const RightDataTable: React.FC<Props> = ({ items, check, isChecked }) => {
  const CheckboxCell: React.FC<CellProps> = ({ value: id }) => {
    return (
      <Checkbox
        isChecked={isChecked(id)}
        onChange={(checked) => check(id, checked)}
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
      data={items}
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
      defaultPageSize={items.length}
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
