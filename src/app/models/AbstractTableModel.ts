import { observable, computed, ObservableMap, action } from 'mobx';
import IDataItem from 'app/IDataItem';
import _ from 'lodash';

export default abstract class AbstractTableModel {
  constructor(items: IDataItem[]) {
    this._items = observable.map(_.map(items, (item) => [item.id, item]));
  }
  @computed public get items() {
    const itemsResult = Array.from(this._items.values());
    return itemsResult;
  }
  @computed public get count() {
    return this._items.size;
  }
  public getItemById(id: number) {
    return this._items.get(id);
  }
  @action public add = (item: IDataItem) => {
    this._items.set(item.id, item);
  };
  @action public delete = (id: number) => {
    return this._items.delete(id);
  };
  private _items: ObservableMap<number, IDataItem>;
}
