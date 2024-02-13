import React from 'react';
import styles from './style.module.css';
import { Medicines } from '../Medicine';
import { FormProps } from '../../interfaces';
import { Button, Form, FormGroup, Label, Input, Collapse, CardTitle, Card, CardBody, Container, Row, Col } from 'reactstrap';

export const FormIdentification = ({
  onSubmit,
  onChangeMedic,
  onChangePattient,
  onChangeMedicine,
  onClick,
  hasPrescription,
}: FormProps) => {
  return (
    <Container>
      <Form className={styles.container} onSubmit={onSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="medic">Nome médico</Label>
              <Input
                type="text"
                name="medic"
                id="medic"
                placeholder={`Digite o nome do/a Médico/a`}
                onChange={onChangeMedic}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="patient">Nome do/a paciente</Label>
              <Input
                type="text"
                name="patient"
                id="patient"
                placeholder={`Digite o nome do(a) paciente`}
                onChange={onChangePattient}
              />
            </FormGroup>
          </Col>

          <Col md={12} className='d-flex justify-content-end'>
            <Button color="primary" type="submit">
              Criar prescrição
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Button className="mb-2" type="button" onClick={onClick}>
              Clique para ver medicamentos disponíveis
            </Button>
            <Collapse isOpen={hasPrescription}>
              <Card>
                <CardBody className={styles.seeDrugs}>
                  <CardTitle tag="h3">
                    Medicamentos disponivéis
                  </CardTitle>
                  <Medicines onChange={onChangeMedicine} />
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Form>
    </Container >
  );
};
