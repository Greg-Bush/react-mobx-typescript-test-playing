import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { observer } from 'mobx-react';
import IDataItem from 'app/IDataItem';
import Checkbox from 'app/base-components/Checkbox';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';

interface Props {
  items: IDataItem[];
  check: (item: IDataItem, value: boolean) => void;
  isChecked: (item: IDataItem) => boolean;
}
interface CellProps {
  value: IDataItem;
}

const RightDataTable: React.FC<Props> = ({
  items,
  check,
  isChecked
}) => {
  const CheckboxCell: React.FC<CellProps> = ({value: item}) => {
    return (
      <Checkbox
        isChecked={isChecked(item)}
        onChange={(checked) => check(item, checked)}
      />
    );
  };
  return (
    <ReactTable
      showPagination={false}
      data={items}
      columns={[
        {
          id: 'descriptionColumn',
          accessor: (d) => d,
          Cell: DescriptionCell
        },
        {
          id: 'checkboxColumn',
          accessor: (d) => d,
          Cell: CheckboxCell
        }
      ]}
      defaultPageSize={100}
      className="-striped -highlight"
    />
  );
};

const DescriptionCell: React.FC<CellProps> = ({value: item}) => {
  return (
    <section>
      <p>{'Арт.: ' + item.artNo}</p>
      <p>
        <TruncatedTextWithHTML value={item.name} max={100} />
      </p>
      <p>
        <TruncatedTextWithHTML value={item.description} max={264} />
      </p>
    </section>
  );
};

export default observer(RightDataTable);
