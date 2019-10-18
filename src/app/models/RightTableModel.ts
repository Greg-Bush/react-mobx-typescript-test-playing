import { observable, computed, action } from 'mobx';
import _ from 'lodash';
import IDataItem from '../IDataItem';
import AbstractTableModel from './AbstractTableModel';

export default class RightTableModel extends AbstractTableModel {
  @computed public get checkedCount() {
    return this.checked.size;
  }
  public isChecked = (id: number) => {
    return this.checked.has(this._items.get(id));
  };
  @action public check = (id: number, value: boolean) => {
    console.log({id, value})
    const item = this._items.get(id);
    if (value) {
      this.checked.add(item);
    } else {
      this.checked.delete(item);
    }
  };
  @action public removeChecked = () => {
    const removedItems: IDataItem[] = [];
    this.checked.forEach((checkedItem) => {
      if (this._items.delete(checkedItem.id)) {
        removedItems.push(checkedItem);
      }
    });
    this.checked.clear();
    return removedItems;
  };
  @action public checkAll = () => {
    this._items.forEach((item) => this.checked.add(item));
  };
  @action public uncheckAll = () => {
    this.checked.clear();
  };
  private checked = observable.set<IDataItem>(); // ?
}
