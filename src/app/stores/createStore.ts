import {
  STORE_ROUTER,
  STORE_RIGHT_TABLE,
  STORE_LEFT_TABLE
} from '../constants/stores';
import { History } from 'history';
import { RouterStore } from './RouterStore';
import TablesStore from './TablesStore';
import LeftTableModel from 'app/models/LeftTableModel';
import {
  LEFT_TABLE_MOCK_DATA,
  RIGHT_TABLE_MOCK_DATA
} from 'app/stores/mock-data';
import RightTableModel from 'app/models/RightTableModel';
import { STORE_TABLES } from 'app/constants/stores';

export function createStores(history: History) {
  const leftTableStore = new LeftTableModel(LEFT_TABLE_MOCK_DATA);
  const rightTableStore = new RightTableModel(RIGHT_TABLE_MOCK_DATA);
  const tablesStore = new TablesStore(leftTableStore, rightTableStore);
  const routerStore = new RouterStore(history);
  return {
    [STORE_TABLES]: tablesStore,
    [STORE_LEFT_TABLE]: leftTableStore,
    [STORE_RIGHT_TABLE]: rightTableStore,
    [STORE_ROUTER]: routerStore
  };
}
