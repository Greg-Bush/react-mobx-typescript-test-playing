import React from 'react';
import 'react-table/react-table.css';
import { observer, inject } from 'mobx-react';
import Checkbox from 'app/base-components/Checkbox';
import TruncatedTextWithHTML from 'app/base-components/TruncatedTextWithHTML';
import RightTableModel from 'app/models/RightTableModel';
import { STORE_RIGHT_TABLE } from 'app/constants/stores';
import DataTable from 'app/base-components/DataTable';
import IDataItem from 'app/IDataItem';

interface IProps {
  [STORE_RIGHT_TABLE]?: RightTableModel;
}
interface ICellProps extends IProps {
  item: IDataItem;
}

const CheckboxCell: React.FC<ICellProps> = inject(STORE_RIGHT_TABLE)(
  observer((props) => {
    const { STORE_RIGHT_TABLE: model, item } = props;
    const isChecked = (id: number) => {
      return model.checked.has(item);
    };
    return (
      <Checkbox
        isChecked={isChecked(item.id)}
        onChange={(checked) => model.check(item.id, checked)}
      />
    );
  })
);

const DescriptionCell: React.FC<Partial<ICellProps>> = observer(({ item }) => {
  return (
    <div
      style={{
        whiteSpace: 'normal'
      }}
    >
      <p>{'Арт.: ' + item.artNo}</p>
      <p>
        <TruncatedTextWithHTML value={item.name} max={100} />
      </p>
      <p>
        <TruncatedTextWithHTML value={item.description} max={264} />
      </p>
    </div>
  );
});

const RightDataTable: React.FC<IProps> = (props) => {
  const { STORE_RIGHT_TABLE: model } = props;
  return (
    <DataTable
      showPagination={false}
      showPageSizeOptions={false}
      sortable={false}
      data={model.items}
      columns={[
        {
          Header: undefined,
          id: 'descriptionColumn',
          accessor: 'id',
          Cell: ({ value: id }) => (
            <DescriptionCell item={model.getItemById(id)} />
          )
        },
        {
          Header: undefined,
          id: 'checkboxColumn',
          accessor: 'id',
          Cell: ({ value: id }) => (
            <CheckboxCell item={model.getItemById(id)} />
          ),
          width: 35,
          style: {
            alignSelf: 'center'
          }
        }
      ]}
      pageSize={model.count}
      className="-striped -highlight"
      getTheadProps={() => ({
        style: {
          height: 0
        }
      })}
    />
  );
};

export default inject(STORE_RIGHT_TABLE)(observer(RightDataTable));
