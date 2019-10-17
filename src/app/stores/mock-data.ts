import IDataItem from '../IDataItem';

const DATA_ITEM = {
  name:
    'Процессор Intel Core i9-9900K Coffee Lake (3600MHz,LGA1151 v2, L3 16386Kb)',
  description:
    '8-ядерный процессор, Socket LGA1151 v2, частота3600 МГц, объем кэша L2/L3: 2048 КБ/16386 КБ,ядро Coffee Lake, техпроцесс 130, 14 нм,интегрированное графическое ядро, встроенный...'
};

const MOCK_DATA: IDataItem[] = [];

for (let i = 1; i < 10; i++) {
  MOCK_DATA.push({
    id: i,
    ...DATA_ITEM,
    artNo: i + '9999'
  });
}

export default MOCK_DATA;

export const LEFT_TABLE_MOCK_DATA = MOCK_DATA.slice(0, 4);
export const RIGHT_TABLE_MOCK_DATA = MOCK_DATA.slice(5, 8);
