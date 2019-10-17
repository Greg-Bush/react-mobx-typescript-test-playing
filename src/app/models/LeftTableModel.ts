import { observable, computed } from 'mobx';
import _ from 'lodash';
import AbstractTableModel from './AbstractTableModel';

export default class LeftTableModel extends AbstractTableModel {
  @computed public get isFirstSelected() {
    return this.count && this.selectedIndex === 0;
  }
  @computed public get isLastSelected() {
    return this.selectedIndex + 1 === this.count;
  }
  @computed public get isAnySelected() {
    return this.count > 0;
  }
  @computed public get selectedId() {
    return this.items[this.selectedIndex].id;
  }
  public removeSelected = () => {
    const { selected } = this;
    if (this._items.delete(this.selected.id)) {
      return selected;
    }
    return null;
  };
  public selectNext = () => {
    this.selectedIndex++;
  };
  public selectPrevious = () => {
    this.selectedIndex--;
  };

  @observable private selectedIndex = 0;
  @computed private get selected() {
    return this.items[this.selectedIndex];
  }
  @computed private get count() {
    return this._items.size;
  }
}
