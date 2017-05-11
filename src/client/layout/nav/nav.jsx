import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import routes from 'routes/routes';

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="nav">
        {routes.nav.map((route, i) => {
          return (
            <li
              key={`navlink-${i}`}
            >
              <NavLink
                exact
                className="navLink"
                activeClassName="navLink_active"
                to={route.path}
              >
                <img
                  className="logo"
                  height="100"
                  src={require('media/images/specialized-logo.png')}
                  alt="specialized digital"
                />
              </NavLink>
            </li>
          )
        })}
      </ul>
    );
  }
}
