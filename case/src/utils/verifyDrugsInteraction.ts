import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _flattenDepth from 'lodash/flattenDepth';
import _union from 'lodash/union';
import _get from 'lodash/get'
import drugs from '../services/mock/medicamentos.json';
import drugsIteraction from '../services/mock/interacao_medicamentosa.json';

const normalizeFilter = (data: any) => _map(data, item => ({
  IdMedicamento: _get(item, 'IdMedicamento'),
  Farmacos: _get(item, 'Farmacos', [])
}))

const safeDrugsIteraction = (data: any) => _filter(drugsIteraction,
  item => data.includes(item.Farmaco1) && data.includes(item.Farmaco2))


const extractFarmacos = (data: any) => {
  const obj = _map(data, (item) => {
    const { Farmacos } = item;
    return [Farmacos];
  });
  return _union(_flattenDepth(obj, 2));
};

export const verifyDrugsIteraction = (listOfDrugsById: string[]) => {
  const listFiltered = _filter(drugs, item => listOfDrugsById.includes(String(item.IdMedicamento)))
  const normalized = normalizeFilter(listFiltered);
  const objectExtractFarmacos = extractFarmacos(normalized);
  const drugsIteractionMapping = safeDrugsIteraction(objectExtractFarmacos);

  return drugsIteractionMapping;
};
