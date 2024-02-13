import React from 'react';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty'
import styles from './style.module.css';
import { ListGroup, Container, Row, Col, ListGroupItem, Alert } from 'reactstrap';
import { findDataDrug } from './utils/findDrugs';
import { DrugInteractions } from './components/DrugInteractions';

interface Drug {
  Nome: string;
  ViaAdministracao: string;
  Concentracao?: string;
}
interface DrugInteraction {
  Descricao: string;
  Farmaco1: string;
  Farmaco2: string;
  Nome: string;
}

interface Props {
  data: {
    drugsInteractions: DrugInteraction[];
    selectMedicine: Drug[];
  };
}

export const MedicalRecordsDetails: React.FC<Props> = ({ data }) => {
  const { drugsInteractions, selectMedicine } = data
  if (!selectMedicine || selectMedicine.length === 0) {
    return (
      <Alert color="warning">
        <h5>Ainda não foram prescritos medicamentos!</h5>
      </Alert>
    );
  }

  const listItems = findDataDrug(selectMedicine);
  const list = _map(listItems, (item, idx) => {
    const { Nome, ViaAdministracao, Concentracao } = item;

    return (
      <ListGroupItem key={idx} className={styles.listDrugs}>
        <Row>
          <Col>
            <span>Nome do medicamento: </span><b>{Nome}</b>
          </Col>
        </Row>
        <Row>
          <Col>
            {Concentracao && <span>Posologia: {Concentracao}</span>}
          </Col>
        </Row>
        <Row>
          <Col>
            <span>Via adminstração: {ViaAdministracao}</span>
          </Col>
        </Row>
      </ListGroupItem>
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <h4>Medicamentos prescritos</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>{list}</ListGroup>
        </Col>
      </Row>
      {!_isEmpty(drugsInteractions) &&
        <Row>
          <Col md={12}>
            <DrugInteractions drugsInteractions={drugsInteractions} />
          </Col>
        </Row>
      }
    </Container>
  );
};