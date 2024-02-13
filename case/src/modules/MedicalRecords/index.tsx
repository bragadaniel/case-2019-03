import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { FormIdentification } from '../../components/FormIdentification';
import {
  onRemoveSpecificItemInArray,
  genUniqueId,
  genDoctorRecordDate,
} from '../../utils/functions';
import { Container } from 'reactstrap';
import { verifyDrugsIteraction } from '../../utils/verifyDrugsInteraction';
import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'

export const MedicalRecords = () => {
  const [nameMedic, setNameMedic] = useState('');
  const [namePatient, setNamePatient] = useState('');
  const [selectMedicine, setSelecteMedicine] = useState<string[]>([]);
  const [hasPrescription, setHasPrescription] = useState(false);
  const [drugsInteractions, setDrugsInteraction] = useState<any>([])

  const [payloaStorage, setPayloadStorage] = useState<any>([]);

  const handleChangeMedic = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNameMedic(e.target.value);
  const handleChangePattient = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNamePatient(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPayloadStorage([
      ...payloaStorage,
      {
        id: genUniqueId(),
        date: genDoctorRecordDate(),
        namePatient,
        nameMedic,
        selectMedicine,
        drugsInteractions
      },
    ]);
  };

  useEffect(() => {
    if (!_isEmpty(payloaStorage)) {
      const stringify = JSON.stringify({ prescriptions: payloaStorage });
      localStorage.setItem('#prescription', stringify);
    }
  }, [payloaStorage, drugsInteractions]);


  useEffect(() => {
    if (!_isEmpty(selectMedicine)) {
      setDrugsInteraction(
        verifyDrugsIteraction(selectMedicine)
      )
    }
  }, [selectMedicine])

  const handleChange = (e: any) => {
    const selectedsClone = _cloneDeep(selectMedicine)
    const isChecked = e.currentTarget.checked;
    const value = e.currentTarget.value;
    isChecked
      ? setSelecteMedicine([...selectedsClone, value])
      : setSelecteMedicine(onRemoveSpecificItemInArray(selectedsClone, value));
  };

  const handleClickSeeMedicine = () => setHasPrescription(!hasPrescription);

  return (
    <Layout>
      <Container>
        <h2>Prescrição médica</h2>
        <FormIdentification
          onSubmit={handleSubmit}
          onClick={handleClickSeeMedicine}
          onChangeMedic={handleChangeMedic}
          onChangePattient={handleChangePattient}
          onChangeMedicine={handleChange}
          hasPrescription={hasPrescription}
        />
      </Container>
    </Layout>
  );
};
