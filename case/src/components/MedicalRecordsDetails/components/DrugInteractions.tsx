import React, { useState } from 'react';
import { Row, Col, Collapse, Button, CardText, CardSubtitle, CardTitle, CardBody, Card } from 'reactstrap';
import _map from 'lodash/map'

export const DrugInteractions = ({ drugsInteractions }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return <>
    <Row className='mb-1 mt-1'>
      <Col md={12} className='d-flex justify-content-end'>
        <Button
          data-bs-toggle="collapse"
          color="primary"
          onClick={toggle}
        >
          Ver Interação
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Collapse isOpen={isOpen}>
          {_map(drugsInteractions, (item, idx) =>
          (<Card
            color="info mb-2 mt-2"
            inverse
            key={idx}
          >
            <CardBody>
              <CardTitle tag="h5">
                {`Interação: ${item.Nome}`}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {`Farmacos: ${item.Farmaco1}, ${item.Farmaco2}`}
              </CardSubtitle>
              <CardText>
                {item.Descricao}
              </CardText>
            </CardBody>
          </Card>))}
        </Collapse>
      </Col>
    </Row>
  </>
}