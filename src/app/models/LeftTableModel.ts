import { observable, computed, action } from 'mobx';
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
    const { items } = this;
    const selectedItem = items[this.selectedIndex];
    return selectedItem && selectedItem.id;
  }
  @action public removeSelected = () => {
    const { selected, isLastSelected } = this;
    if (this._items.delete(selected.id)) {
      if (isLastSelected) {
        this.selectedIndex = 0;
      }
      return selected;
    }
    return null;
  };
  @action public selectNext = () => {
    this.selectedIndex++;
  };
  @action public selectPrevious = () => {
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
