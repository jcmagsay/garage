import React, {Component} from 'react';

export default class Social extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="page">
        <style>
          {`
            .demo-card-square.mdl-card {
              width: 75%;
              height: 75%;
              margin: auto;
            }
            .demo-card-square1 > .mdl-card__title {
              color: #fff;
              background: #46B6AC;
            }
          `}
        </style>

        <div className="demo-card-square demo-card-square1 mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Mountain Ride Chat</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <ul className="demo-list-three mdl-list block">
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan</span>
                  <span className="mdl-list__item-text-body">
                    {`Anyone up for a ride today before the rain comes?`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Paul</span>
                  <span className="mdl-list__item-text-body">
                    {`Sure! Count me in! I'll be there about 5 minutes late. I have to fill my tires with air.`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons  mdl-list__item-avatar">person</i>
                  <span>Bob</span>
                  <span className="mdl-list__item-text-body">
                    {`I will also join. I'll be coming from South Denver so I'll be a few minutes late as well`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan</span>
                  <span className="mdl-list__item-text-body">
                    {`Anyone up for a ride today before the rain comes?`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Paul</span>
                  <span className="mdl-list__item-text-body">
                    {`Sure! Count me in! I'll be there about 5 minutes late. I have to fill my tires with air.`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons  mdl-list__item-avatar">person</i>
                  <span>Bob</span>
                  <span className="mdl-list__item-text-body">
                    {`I will also join. I'll be coming from South Denver so I'll be a few minutes late as well`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Bryan</span>
                  <span className="mdl-list__item-text-body">
                    {`Anyone up for a ride today before the rain comes?`}
                  </span>
                </span>
              </li>
              <li className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>Paul</span>
                  <span className="mdl-list__item-text-body">
                    {`Sure! Count me in! I'll be there about 5 minutes late. I have to fill my tires with air.`}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
