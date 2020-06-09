import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            as={NavLink}
            exact
            to="/"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Vehicles'
            active={activeItem === 'Vehicles'}
            as={NavLink}
            exact
            to="/Vehicles"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Detail'
            active={activeItem === 'Detail'}
            as={NavLink}
            exact
            to="/Detail"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            as={NavLink}
            exact
            to="/Profile"
            onClick={this.handleItemClick}
          />

          <Menu.Item position='right'>

            <NavBar />
          </Menu.Item>

        </Menu>

      </div>
    )
  }
}