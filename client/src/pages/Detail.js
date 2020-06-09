import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [vehicle, setVehicle] = useState({})

  // When this component mounts, grab the Vehicle with the _id of props.match.params.id
  // e.g. localhost:3000/Vehicles/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getVehicle(id)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err));
  })

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {vehicle.name} drives a {vehicle.make}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Model</h1>
            <p>
              {vehicle.model}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/vehicles">← Back to Vehicles</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
