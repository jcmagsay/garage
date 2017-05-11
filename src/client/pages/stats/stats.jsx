import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Stats extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="page">
        <style>
          {`
            .demo-card-square.mdl-card {
              width: 400px;
              height: 400px;
              margin: 0 0 0 3.2rem;
            }
            .demo-card-square1 > .mdl-card__title {
              color: #fff;
              background: #46B6AC;
            }
            .demo-card-square2 > .mdl-card__title {
              color: #fff;
              background: #9C27B0;
            }
            .demo-card-square3 > .mdl-card__title {
              color: #fff;
              background: #FFC107;
            }
            .rides {
              display: flex;
              margin: auto;
            }
          `}
        </style>
        <div className="rides">

          <div className="demo-card-square demo-card-square1 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Mountain Bike Stats</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Tuneup</h3>
              <div>in 1000 miles</div>
              <h6>{`You're at 1000 / 2000 miles`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View More Stats
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Find a bike pro
              </Link>
            </div>
          </div>

          <div className="demo-card-square demo-card-square2 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Road Bike Stats</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Tuneup</h3>
              <div>in 300 miles</div>
              <h6>{`You're at 1700 / 2000 miles`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View More Stats
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Find a bike pro
              </Link>
            </div>
          </div>

          <div className="demo-card-square demo-card-square3 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Training Bike Stats</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Tuneup</h3>
              <div>in 500 miles</div>
              <h6>{`You're at 1500 / 2000 miles`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View More Stats
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Find a bike pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
