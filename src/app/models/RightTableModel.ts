import { observable, computed } from 'mobx';
import _ from 'lodash';
import IDataItem from '../IDataItem';

class RightTableModel {
  constructor(items: IDataItem[]) {
    this._items = new Set(items);
  }
  @computed public get items() {
    return Array.from(this._items);
  }
  @computed public get checkedCount() {
    return this.checked.size;
  }
  public isChecked(item: IDataItem) {
    return this.checked.has(item);
  }
  public check(item: IDataItem, value: boolean) {
    if (value) {
      this.checked.add(item);
    } else {
      this.checked.delete(item);
    }
  }
  public add(item: IDataItem) {
    this._items.add(item);
  }
  public removeChecked() {
    const removedItems: IDataItem[] = [];
    this.checked.forEach(checkedItem => {
      if (this._items.delete(checkedItem)) {
        removedItems.push(checkedItem);
      }
    });
    this.checked.clear();
    return removedItems;
  }
  public checkAll() {
    this._items.forEach(item => this.checked.add(item));
  }
  public uncheckAll() {
    this.checked.clear();
  }

  @observable private _items: Set<IDataItem>;
  @observable private checked = new Set<IDataItem>();
}

export default RightTableModel;
