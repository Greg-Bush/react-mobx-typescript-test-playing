type TextWithHTML = string;

export default interface IDataItem {
  id: number;
  artNo: string;
  name: TextWithHTML;
  description: TextWithHTML;
}
