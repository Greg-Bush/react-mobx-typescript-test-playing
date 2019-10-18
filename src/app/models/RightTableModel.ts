import { observable, computed, action } from 'mobx';
import _ from 'lodash';
import IDataItem from '../IDataItem';
import AbstractTableModel from './AbstractTableModel';

export default class RightTableModel extends AbstractTableModel {
  public checked = observable.set<IDataItem>();
  @computed public get checkedCount() {
    return this.checked.size;
  }
  @action public check = (id: number, value: boolean) => {
    const item = this.getItemById(id);
    if (value) {
      this.checked.add(item);
    } else {
      this.checked.delete(item);
    }
  };
  @action public removeChecked = () => {
    const removedItems: IDataItem[] = [];
    this.checked.forEach((checkedItem) => {
      if (this.delete(checkedItem.id)) {
        removedItems.push(checkedItem);
      }
    });
    this.checked.clear();
    return removedItems;
  };
  @action public checkAll = () => {
    this.items.forEach((item) => this.checked.add(item));
  };
  @action public uncheckAll = () => {
    this.checked.clear();
  };
}
