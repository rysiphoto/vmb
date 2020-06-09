import React, { useState, useEffect } from "react";
import { Form } from 'semantic-ui-react';
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Vehicles() {
  // Setting our component's initial state
  const [vehicles, setVehicles] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Vehicles and store them with setVehicles
  useEffect(() => {
    loadVehicles()
  }, [])

  // Loads all Vehicles and sets them to Vehicles
  function loadVehicles() {
    API.getVehicles()
      .then(res =>
        setVehicles(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads vehicles from the db
  function deleteVehicle(id) {
    API.deleteVehicle(id)
      .then(res => loadVehicles())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveVehicle method to save the Vehicle data
  // Then reload Vehicles from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.make) {
      API.saveVehicle({

        name: formObject.name,
        make: formObject.make,
        model: formObject.model,
        // trim: formObject.trim,
        // color: formObject.color,
        // year: formObject.year,
      })
        .then(res => loadVehicles())
        .catch(err => console.log(err));

    }
  };

  return (
    <Form.Group widths='equal'>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Which Vehicle should I work on next?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="make"
                placeholder="Make (required)"
              />
              <Input
                onChange={handleInputChange}
                name="model"
                placeholder="model (Optional)"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.make && formObject.model)}
                onClick={handleFormSubmit}
              >
                Submit Vehicle
              </FormBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Vehicle is my inventory</h1>
            </Jumbotron>
            {vehicles.length ? (
              <List>
                {vehicles.map(vehicle => (
                  <ListItem key={vehicle._id}>
                    <Link to={"/vehicles/" + vehicle._id}>
                      <strong>
                        {vehicle.title} by {vehicle.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteVehicle(vehicle._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    </Form.Group>
  )
}


export default Vehicles;