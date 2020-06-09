import React from "react"
import { Container, Item } from "semantic-ui-react"
import { List } from "./List";

const Card = ({ post }) => {

  const { name, trim, year, color, make, model, vin } = post;

  return (

    <Container>
      <Item.Group divided>
        <Item>
          <List>
            <Item.Header name="name">{name}'s Vehicles</Item.Header>
            <Item.Description>
              <b> {year} </b>
            </Item.Description>
            <Item.Description>
              <b> {make} </b>
            </Item.Description>
            <Item.Description>
              <b> {model} </b>
            </Item.Description>
            <Item.Description>
              <b> {trim} </b>
            </Item.Description>
            <Item.Description>
              <b> {color} </b>
            </Item.Description>
            <Item.Description>
              <b> {vin} </b>
            </Item.Description>

          </List>
        </Item>
      </Item.Group>
    </Container >

  )

}

export default Card