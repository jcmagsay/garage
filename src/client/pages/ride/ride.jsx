import React, {Component} from 'react';

export default class Ride extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="page">
        <style>
          {`
            .demo-card-square.mdl-card {
              width: 320px;
              height: 320px;
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
              <h2 className="mdl-card__title-text">Mountain Ride</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Countdown</h3>
              <div>20 minutes</div>
              <h6>{`Meet at 7am on Canyon and 14th`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Riders
              </a>
            </div>
          </div>

          <div className="demo-card-square demo-card-square2 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Road Ride</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Countdown</h3>
              <div>2 days</div>
              <h6>{`Meet at 7am on Canyon and 14th`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Riders
              </a>
            </div>
          </div>

          <div className="demo-card-square demo-card-square3 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Training Ride</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Countdown</h3>
              <div>6 hours</div>
              <h6>{`Meet at 12pm on Canyon and 14th`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Riders
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
