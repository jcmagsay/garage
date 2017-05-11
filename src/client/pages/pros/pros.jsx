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
              <h2 className="mdl-card__title-text">Jason</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Top review</h3>
              <div>by Jackie C.</div>
              <h6>{`So glad that I found Jason. I was tired of going to bike shops and dealing with rude and under-educated stoner kids. Jason was super helpful and priced reasonably. I'll definitely  schedule my next service with him.`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                More Reviews
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Make Appointment
              </Link>
            </div>
          </div>

          <div className="demo-card-square demo-card-square2 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Ali</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Top review</h3>
              <div>by Louis P.</div>
              <h6>{`Ali was awesome. No hassles and a great resource for tips and tricks. She helped me understand why my bike was in bad shape and I can now work on my bike in the future by myself. Thanks Ali, 5 stars for great service!`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                More Reviews
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Make Appointment
              </Link>
            </div>
          </div>

          <div className="demo-card-square demo-card-square3 mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Mark</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <h3>Top review</h3>
              <div>by George H.</div>
              <h6>{`Mark was really great. He specialized in new bike builds. I ordered my bike from Specialized.com and I didn't realize that I would have to put it together. Mark does builds starting at $20.`}</h6>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                More Reviews
              </Link>
              <Link to="/social" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
