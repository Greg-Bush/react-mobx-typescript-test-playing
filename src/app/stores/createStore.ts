import {STORE_ROUTER} from '../constants/stores';
import { History } from 'history';
import { RouterStore } from './RouterStore';
import TablesStore from './TablesStore';
import LeftTableModel from 'app/models/LeftTableModel';
import { LEFT_TABLE_MOCK_DATA, RIGHT_TABLE_MOCK_DATA } from 'app/stores/mock-data';
import RightTableModel from 'app/models/RightTableModel';
import { STORE_TABLES } from 'app/constants/stores';

export function createStores(history: History) {
  const tablesStore = new TablesStore(
    new LeftTableModel(LEFT_TABLE_MOCK_DATA),
    new RightTableModel(RIGHT_TABLE_MOCK_DATA)
  );
  const routerStore = new RouterStore(history);
  return {
    [STORE_TABLES]: tablesStore,
    [STORE_ROUTER]: routerStore
  };
}
