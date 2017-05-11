
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor () {
    super();
  }

  render() {
    this.choices = [
      {'description': 'Garage', 'path':'garage', 'icon': 'view_array'},
      {'description': 'Shop', 'path':'shop', 'icon': 'shopping_cart'},
      {'description': 'Ride', 'path':'ride', 'icon': 'directions_bike'},
      {'description': 'Find a Pro', 'path': 'professionals', 'icon': 'build'},
      {'description': 'Stats', 'path':'stats', 'icon': 'insert_chart'},
      {'description': 'Social', 'path':'social', 'icon': 'face'}
    ];
    return (
      <section className="page home">
        <div className="mdl-list">
          {this.choices.map((choice, i) => {
            return (
              <div className="mdl-list__item" key={`path-${i}`}>
                <Link
                  to={`/${choice.path}`}
                >
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar mdl-list_noMarginRight">
                      {choice.icon}
                    </i>
                  </span>
                  <h6 className="textCenter">{choice.description}</h6>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
