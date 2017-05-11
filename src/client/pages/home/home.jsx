import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor () {
    super();
  }

  render() {
    this.choices = [
      {'path':'shop', 'icon': 'shopping_cart'},
      {'path':'ride', 'icon': 'directions_bike'},
      {'path':'build', 'icon': 'build'},
      {'path':'notifications', 'icon': 'notifications'},
      {'path':'face', 'icon': 'face'}
    ];
    return (
      <div className="mdl-list">
        {this.choices.map((choice, i) => {
          return (
            <div className="mdl-list__item" key={`path-${i}`}>
              <Link
                to={`/${choice.path}`}
              >
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">{choice.icon}</i>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
