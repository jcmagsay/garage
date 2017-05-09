import React, {Component} from 'react';
import classNames from 'classnames';
import GarageCard from 'pages/garage/garage-card';

export default class Garage extends Component {
  constructor () {
    super();

    this.bikes = [
      {
        'name': 'Road 1',
        'bikeType': 'road',
        'stats': {
          'miles': 2000
        }
      },
      {
        'name': 'Mounatin 1',
        'bikeType': 'mountain',
        'stats': {
          'miles': 1000
        }
      },
      {
        'name': 'Fitness Road',
        'bikeType': 'road',
        'stats': {
          'miles': 753
        }
      },
      {
        'name': 'Mountain 2',
        'bikeType': 'mountain',
        'stats': {
          'miles': 4289
        }
      }
    ];
    this.state = {
      'isOpen': false
    };

    this.setUpHandlers();
  }

  setUpHandlers() {
    this.openGarage = this.openGarage.bind(this);
    this.closeGarage = this.closeGarage.bind(this);
  }

  openGarage() {
    this.setState({'isOpen': true});
  }

  closeGarage() {
    this.setState({'isOpen': false});
  }

  render() {
    const garageClasses = classNames(
      'garage',
      { 'garage_open': this.state.isOpen }
    );
    const doorClasses = classNames(
      'garage-door',
      { 'garage-door_open': this.state.isOpen }
    );
    return (
      <div className="garage-page">
        <GarageCard />
        <div
          className="garage-bg"
          style={{ 'backgroundImage': `url(${require('media/images/garage.png')})` }}
        ></div>
        <section className={garageClasses}>
          <div className="garage-controls">
            <button
              className="garage-control garage-control_green"
               onClick={this.openGarage}
            ></button>
            <button
              className="garage-control garage-control_red"
               onClick={this.closeGarage}
            ></button>
          </div>
          <div className={doorClasses}>
            <div className="garage-front">
              {[...Array(16)].map((x, i) =>
                <div className="garage-panel" key={i}>
                  <div className="garage-panelGlass">
                    <div className="garage-panelDescription"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="garage-edges"></div>
          </div>
          <div className="garage-bikeRack">
            {/*
            <img
              src={require('media/images/crosstrail.png')}
              height="100%"
              width="50%"
            />
            <img
              src={require('media/images/hardrock.png')}
              height="100%"
              width="50%"
            />
            <img
              src={require('media/images/s-works-epic.png')}
              height="100%"
              width="50%"
            />
            */}
            <img
              src={require('media/images/stunt-jumper.png')}
              height="100%"
              width="75%"
            />
          </div>
        </section>
      </div>
    );
  }
}
