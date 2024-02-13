import _filter from 'lodash/filter';
import _flatMap from 'lodash/flatMap';
import medicamentos from '../../../services/mock/medicamentos.json';

export const findDataDrug = (data: any) => _flatMap(data, drugId =>
  _filter(medicamentos, { 'IdMedicamento': Number(drugId) })
);