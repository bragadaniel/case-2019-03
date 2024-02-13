import React from 'react';
import { ListItems } from './Components/ListItems';
import { MedicineProps } from '../../interfaces';
import { ListGroup } from 'reactstrap';

export const Medicines = ({ onChange }: MedicineProps) => {
  return (<ListGroup>
    <ListItems onChange={onChange} />
  </ListGroup>
  );
};
