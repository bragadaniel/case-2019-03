import React from 'react';
import _map from 'lodash/map';
import _orderBy from 'lodash/orderBy';
import _join from 'lodash/join'
import { MedicineProps } from '../../../interfaces/index.js';
import { Label, Row, Col, Input, ListGroupItem } from 'reactstrap';
import styles from '../style.module.css';

import medicamentos from '../../../services/mock/medicamentos.json';

export const ListItems = ({ onChange }: MedicineProps) => {
  const orderedMedicamentos = _orderBy(medicamentos, ['Nome'], ['asc']);

  return (
    <>
      {_map(orderedMedicamentos, (item, idx) => {
        const { IdMedicamento, Nome, Concentracao, ViaAdministracao } = item;
        return (
          <ListGroupItem key={`${Nome}-${idx}`}>
            <Row>
              <Col xs={1}>
                <Input
                  type="checkbox"
                  name={Nome}
                  id={`${Nome}-${IdMedicamento}`}
                  onChange={onChange}
                  value={IdMedicamento}
                />
              </Col>
              <Col xs={11}>
                <Label for={`${Nome}-${IdMedicamento}`} className={styles.item}>
                  <Row>
                    <Col>
                      <b> {Nome}</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span> Posologia: <b>{Concentracao || '--'}</b></span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span> Via administracao: <b>{ViaAdministracao}</b></span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span> Farmaco: {_join(item.Farmacos, ', ')}</span>
                    </Col>
                  </Row>
                </Label>
              </Col>
            </Row>
          </ListGroupItem>
        );
      })}
    </>
  );
};
