import { observable, action } from 'mobx';
import LeftTableModel from 'app/models/LeftTableModel';
import RightTableModel from 'app/models/RightTableModel';
import _ from 'lodash';

export default class TablesStore {
  constructor(left: LeftTableModel, right: RightTableModel) {
    this.left = left;
    this.right = right;
  }
  @observable public left: LeftTableModel;
  @observable public right: RightTableModel;

  @action throwRight = (): void => {
    const item = this.left.removeSelected();
    if (item) {
      this.right.add(item); 
    }
  }
  @action throwLeft = (): void => {
    const items = this.right.removeChecked();
    _.forEach(items, this.left.add);
  }
}
