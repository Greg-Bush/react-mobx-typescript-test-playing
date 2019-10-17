import { observable, computed, ObservableMap } from "mobx";
import IDataItem from "app/IDataItem";
import _ from "lodash";

export default abstract class AbstractTableModel {
  constructor(items: IDataItem[]) {
    this._items = observable.map(_.map(items, (item) => [item.id, item]));
  }
  @computed public get items() {
    const itemsResult = Array.from(this._items.toJS().values());
    return itemsResult;
  }
  public add = (item: IDataItem) => {
    this._items.set(item.id, item);
  };
  protected _items: ObservableMap<number, IDataItem>;
}