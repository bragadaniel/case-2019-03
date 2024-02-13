import React from 'react';
import _map from 'lodash/map'
import _get from 'lodash/get'
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import styles from './style.module.css';
import { MedicalRecordsDetails } from '../MedicalRecordsDetails';

const ListItem = ({ item, idx }: any) => {
  const { date, nameMedic, namePatient, selectMedicine, drugsInteractions } = item;

  return (
    <ListGroupItem key={`${idx}--${date}`} className={styles.medicalRecords}>
      <div className={styles.boxIdentification}>
        <span>
          <b>Data: </b>
          {date || '--'}
        </span>
        <span>
          <b>Médico: </b>
          {nameMedic || '--'}
        </span>
        <span>
          <b>Paciente: </b>
          {namePatient || '--'}
        </span>
      </div>
      <MedicalRecordsDetails data={{ drugsInteractions, selectMedicine }} />
    </ListGroupItem>
  );
};

export const ListOfMedicalRecords = ({ data }: any) => {
  const dataPrescription = _get(data, 'prescriptions', [])
  if (dataPrescription.length === 0) {
    return null;
  }

  return (
    <Container>
      <ListGroup>
        {_map(dataPrescription, (item, idx) => (
          <ListItem key={idx} item={item} idx={idx} />
        ))}
      </ListGroup>
    </Container>
  );
};
