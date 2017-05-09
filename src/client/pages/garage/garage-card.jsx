import React, {Component} from 'react';
import classNames from 'classnames';

export default class GarageCard extends Component {
  constructor() {
    super();
    this.metrics = [
      {
        'key': 'Number of Rides',
        'value': 400
      },
      {
        'key': 'Last Tuneup',
        'value': `4/29/2017`
      },
      {
        'key': 'Equipment',
        'value': ['saddle, ','brakes']
      },
      {
        'key': 'Total Miles',
        'value': 9284
      },
      {
        'key': 'Tuneup Due',
        'value': 12000
      }
    ];
    const data = `Schedule Maintenance through the app to a local store, or local bike professional/enthusiast (Rating and feedback for the shops and professionals, similar to Angie’s list)
    Push notification when it’s time for a tune up.
    Bike building guides for all your bike profiles`;
  }

  render() {
    return (
      <div className="garage-card">
        {this.metrics.map((metric, i) => {
          return(
            <div key={`metric-${i}`}>
              <h4>{metric.key}</h4>
              <h6>{metric.value}</h6>
            </div>
          );
        })}
      </div>
    );
  }
}
