import React, { useState } from 'react';
import { MedicalRecords } from '../MedicalRecords';
import { TabNavigate } from '../../components/Tabs';
import { ListOfMedicalRecords } from '../../components/ListOfMedicalRecords';
import { Container } from 'reactstrap';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [data, setData] = useState<any>();
  const toggle = (e: any) => {
    const element = e.currentTarget.id;
    if (activeTab !== element) {
      setActiveTab(element);
      const storage: any = localStorage.getItem('#prescription')
      const prescript: any = JSON.parse(storage)
      setData(prescript);
    }
  };
  return (
    <Container className='mb-5'>
      <TabNavigate
        componentsTabOne={<MedicalRecords />}
        componentsTabTwo={<ListOfMedicalRecords data={data} />}
        activeTab={activeTab}
        toggle={toggle}
      />
    </Container>
  );
};
