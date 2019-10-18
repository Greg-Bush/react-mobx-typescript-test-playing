import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import TablesStore from 'app/stores/TablesStore';
import { STORE_TABLES } from 'app/constants/stores';
import Button from 'app/base-components/Button';
import LeftDataTable from 'app/components/LeftDataTable';
import RightDataTable from 'app/components/RightDataTable';

export interface TablesAppProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  [STORE_TABLES]: TablesStore;
}

@inject(STORE_TABLES)
@observer
export default class TablesApp extends React.Component<TablesAppProps> {
  render() {
    const tablesStore = this.props[STORE_TABLES];
    const { left, right } = tablesStore;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 40px',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '20px'
        }}
      >
        <div>
          <LeftDataTable />
        </div>
        <div>
          <RightDataTable />
        </div>
        <div
          style={{
            display: 'inline-grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10px'
          }}
        >
          <Button
            disabled={left.isLastSelected || !left.isAnySelected}
            onPress={left.selectNext}
          >
            &darr;
          </Button>
          <Button
            disabled={left.isFirstSelected || !left.isAnySelected}
            onPress={left.selectPrevious}
          >
            &uarr;
          </Button>
          <Button
            disabled={!left.isAnySelected}
            onPress={tablesStore.throwRight}
          >
            Добавить
          </Button>
        </div>
        <div
          style={{
            display: 'inline-grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '10px'
          }}
        >
          <Button
            disabled={right.checkedCount === right.count}
            onPress={right.checkAll}
          >
            Выбрать все
          </Button>
          <Button
            disabled={right.checkedCount === 0}
            onPress={right.uncheckAll}
          >
            Сбросить выделение
          </Button>
          <Button
            disabled={right.checkedCount === 0}
            onPress={tablesStore.throwLeft}
          >
            Удалить
          </Button>
        </div>
      </div>
    );
  }
}
