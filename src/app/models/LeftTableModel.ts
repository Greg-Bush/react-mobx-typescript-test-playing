import { observable, computed } from 'mobx';
import _ from 'lodash';
import IDataItem from '../IDataItem';

class LeftTableModel {
  constructor(items: IDataItem[]) {
    this._items = new Map(_.map(items, item => [item.id, item]));
  }
  @computed public get items() {
    return Array.from(this._items.values());
  }
  @computed public get isFirstSelected() {
    return this.count && this.selectedIndex === 0;
  }
  @computed public get isLastSelected() {
    return this.selectedIndex + 1 === this.count;
  }
  @computed public get isAnySelected() {
    return this.count > 0;
  }
  public isSelected(item: IDataItem) {
    return item === this.selected;
  }
  public add(item: IDataItem) {
    this._items.set(item.id, item);
  }
  public removeSelected() {
    const { selected } = this;
    if (this._items.delete(this.selected.id)) {
      return selected;
    }
    return null;
  }
  public selectNext() {
    this.selectedIndex++;
  }
  public selectPrevious() {
    this.selectedIndex--;
  }

  @observable private _items: Map<number, IDataItem>;
  @observable private selectedIndex = 0;
  @computed private get selected() {
    return this.items[this.selectedIndex];
  }
  @computed private get count() {
    return this._items.size;
  }
}

export default LeftTableModel;
