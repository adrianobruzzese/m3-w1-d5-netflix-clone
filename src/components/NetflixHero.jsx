import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { TextLeft, Grid } from 'react-bootstrap-icons';
import NetflixCarousel from './NetflixCarousel';

const iconStyle = {
  marginRight: '1rem',
  border: 'solid white 0.2px',
  padding: '1px',
};

const movieSections = [
  { id: 'guardians', title: 'Guardians of the Galaxy', query: 'guardians of the galaxy' },
  { id: 'xmen', title: 'X-Men', query: 'x men' },
  { id: 'natale', title: 'Natale a...', query: 'natale a' },
];

const NetflixHero = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-between">
        <Col className="d-flex" md={11}>
          <h2 className="mb-1">Movies</h2>
          <Dropdown className="ms-3">
            <Dropdown.Toggle className="bg-black text-white" variant="dark">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-black text-white">
              <Dropdown.Item href="#/guardians">Guardians of the Galaxy</Dropdown.Item>
              <Dropdown.Item href="#/xmen">X-Men</Dropdown.Item>
              <Dropdown.Item href="#/natale">Natale a...</Dropdown.Item>
              <Dropdown.Item href="#/shuffle">Watch random</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={1} className="d-flex justify-content-end">
          <TextLeft size="1.4rem" style={iconStyle} />
          <Grid size="1.4rem" style={iconStyle} />
        </Col>
      </Row>
      {movieSections.map(section => (
        <div className="mt-3" key={section.id}>
          <h4 className="text-start" id={section.id}>
            {section.title}
          </h4>
          <NetflixCarousel searchQuery={section.query} />
        </div>
      ))}
    </Container>
  );
};

export default NetflixHero;
