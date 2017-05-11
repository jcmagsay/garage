import React, {Component} from 'react';
import classNames from 'classnames';

export default class Shop extends Component {
  constructor () {
    super();

    this.createTabSections();

    this.state = {
      'activeTab': this.tabs.details,
      'drawerOpen': true
    }

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.goBack = this.goBack.bind(this);
    this.swapDrawerSection = this.swapDrawerSection.bind(this);
  }

  createTabSections() {
    this.tabs = {
      'details': {
        'id': 'details',
        'component': this._renderInfo()
      },
      'parts': {
        'id': 'parts',
        'component': this._renderParts()
      },
      'ratings': {
        'id': 'ratings',
        'component': this._renderRatings()
      },
      'recommendations': {
        'id': 'recommendations',
        'component': this._renderRecommendations()
      }
    }
  }

  openDrawer(e) {
    this.setState({
      'activeTab': this.tabs.parts,
      'drawerOpen': true
    });
  }

  closeDrawer() {
    this.setState({
      'activeTab': this.tabs.parts,
      'drawerOpen': false
    });
  }

  goBack() {
    this.setState({'activeTab': this.tabs.details});
  }

  swapDrawerSection(e) {
    const id = e.currentTarget.id;
    this.setState({'activeTab': this.tabs[id]})
  }

  _renderInfo() {
    this.parts = [
      {
        'type': 'FRAME',
        'description': 'Specialized A1 SL Premium Aluminum, Fitness Geometry, rack & Plug + Play mounts'
      },
      {
        'type': 'FRONT HUB',
        'description': 'Specialized, loose ball bearings, 32h, 9mm QR'
      },
      {
        'type': 'REAR HUB',
        'description': 'Specialized, loose ball bearings, 8-/9-speed cassette body, 32h, 9mm QR'
      },
      {
        'type': 'SPOKES',
        'description': 'Stainless, 14g '
      },
      {
        'type': 'RIMS',
        'description': '700c, 6061 aluminum double-wall'
      },
      {
        'type': 'FRONT TIRE',
        'description': 'Trigger Sport Reflect, 700x38mm, 60TPI, wire bead'
      },
      {
        'type': 'REAR TIRE',
        'description': 'Trigger Sport Reflect, 700x38mm, 60TPI, wire bead'
      },
      {
        'type': 'CRANKSET',
        'description': 'Stout, forged alloy w/chainguard'
      },
      {
        'type': 'CHAINRINGS',
        'description': '48/38/28T w/chainguard'
      },
      {
        'type': 'BOTTOM BRACKET',
        'description': 'BSA, square taper, cartridge bearings'
      }
    ];
    return(
      <section className="bike-info">
        <h2>Details</h2>
        <ul className="mdl-list">
          {this.parts.map((part, i) => {
            return(
              <li className="mdl-list__item mdl-list__item--two-line" key={`bike-part-${i}`}>
                <span className="mdl-list__item-primary-content">
                  <span>{part.type}</span>
                  <span className="mdl-list__item-sub-title">{part.description}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  _renderParts() {
    this.parts = [
      { 'name': 'Caliper Brakes' },
      { 'name': 'Cantilever Brakes' },
      { 'name': 'Coaster Brakes' },
      { 'name': 'Disc Brakes' },
      { 'name': 'Drum Brakes' },
      { 'name': 'Hub Brakes' },
      { 'name': 'Hydraulic Brakes' },
      { 'name': 'Roller Brakes' }
    ];
    return(
      <section className="bike-parts">
        <h2>Parts: Brakes</h2>
        <h6><em>Your bike is currently equipt with Hydraulic Brakes**</em></h6>
        <ul className="mdl-list">
          {this.parts.map((part, i) => {
            return(
              <li className="mdl-list__item mdl-list__item--two-line" key={`bike-part-${i}`}>
                <a id="ratings" onClick={this.swapDrawerSection.bind(this)}>
                  <span className="mdl-list__item-primary-content">
                    <i className="mdl-list__item-avatar">
                      <img
                        src="http://sc01.alicdn.com/kf/HTB1t2fyOpXXXXa7XXXXq6xXFXXXY/Mountain-Bike-types-tangze-disc-brake-price.jpg"
                        height="100%"
                        width="100%"
                      />
                    </i>
                    <span>{part.name}</span>
                    <span className="mdl-list__item-sub-title">Description...</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  _renderRatings() {
    this.features = [
      'Designed to render astounding performance',
      'Delivers the surefire control and strength required to stop the vehicle instantly',
      'Depends on the rotors to obtain intense power',
      'Facilitates easy installation',
      'Backed by a limited life time warranty'
    ];
    this.ratings = [
      {
        'name': 'cprater',
        'review': `I don't need no heckin' brakes.`,
        'score': 1
      },
      {
        'name': 'bike bro',
        'review': 'These brakes were awesome',
        'score': 5
      },
      {
        'name': 'bike chick',
        'review': 'High quality brakes for a reasonable price',
        'score': 4
      },
      {
        'name': 'joe',
        'review': 'I wish I got these sooner',
        'score': 4.5
      },
      {
        'name': 'bob',
        'review': 'So good I almost ate it',
        'score': 5
      }
    ];
    return(
      <section className="bike-ratings">
        <h2>Description & Ratings</h2>
        <h3>Disc Brakes</h3>
        <ul className="mdl-list">
          {this.features.map((feature, i) => {
            return(
              <li className="mdl-list__item mdl-list__item--two-line" key={`product-feature-${i}`}>
                <span className="mdl-list__item-primary-content">
                  {feature}
                </span>
              </li>
            )
          })}
        </ul>
        <h3>Reviews</h3>
        <ul className="mdl-list">
          {this.ratings.map((rating, i) => {
            return(
              <li className="mdl-list__item mdl-list__item--two-line" key={`product-rating-${i}`}>
                <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-avatar">person</i>
                  <span>{rating.name}</span>
                  <span className="mdl-list__item-sub-title">
                    {rating.review}
                  </span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <span className="mdl-list__item-secondary-info">Rating</span>
                  <a className="mdl-list__item-secondary-action linkNormal" href="#">{rating.score}/5</a>
                </span>
              </li>
            );
          })}
        </ul>
        <h2></h2>
        <a
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          href="https://www.specialized.com/us/en/equipment/components/drivetrain"
        >
          buy it!
        </a>
      </section>
    );
  }

  _renderRecommendations() {
    const recommendations = this.parts.slice(3, 7);
    return(
      <section className="bike-recommendations">
        <h2>Recommendations</h2>
        <h6>{`Based on this bike and its current build, we recommend the following brake types:`}</h6>
        <ul className="mdl-list">
          {recommendations.map((part, i) => {
            return(
              <li className="mdl-list__item mdl-list__item--two-line" key={`bike-part-${i}`}>
                <a id="ratings" onClick={this.swapDrawerSection.bind(this)}>
                  <span className="mdl-list__item-primary-content">
                    <i className="mdl-list__item-avatar">
                      <img
                        src="http://sc01.alicdn.com/kf/HTB1t2fyOpXXXXa7XXXXq6xXFXXXY/Mountain-Bike-types-tangze-disc-brake-price.jpg"
                        height="100%"
                        width="100%"
                      />
                    </i>
                    <span>{part.name}</span>
                    <span className="mdl-list__item-sub-title">Description...</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  render() {
    const drawerClasses = classNames(
      'bikeDrawer',
      { 'bikeDrawer_open': this.state.drawerOpen }
    );
    return (
      <div>
        <section className="bike">
          <img
            className="garage-bike"
            src={require('media/images/crosstrail.png')}
            height="100%"
            width="75%"
          />
          <a onClick={this.openDrawer}>
            <div className="bike-tireF"></div>
          </a>
          <a onClick={this.openDrawer}>
            <div className="bike-tireB"></div>
          </a>
          <a onClick={this.openDrawer}>
            <div className="bike-pedals"></div>
          </a>
          <a onClick={this.openDrawer}>
            <div className="bike-handlebars"></div>
          </a>
          <a onClick={this.openDrawer}>
            <div className="bike-saddle"></div>
          </a>
          <a onClick={this.openDrawer}>
            <div className="bike-brakes"></div>
          </a>
        </section>
        <div className={drawerClasses}>
          <div className={this.state.activeTab.id === "details" ? 'isVisuallyHidden' : 'bikeDrawer-tabs'}>
            <a onClick={this.goBack}>
              <i className="material-icons">arrow_back</i>
              <h4 className="inline">Back to Details</h4>
            </a>
            <h2></h2>
          </div>
          <div className={this.state.activeTab.id === "details" ? 'isVisuallyHidden' : 'bikeDrawer-tabs'}>
            <a id="parts" href="javascript:void(0);" onClick={this.swapDrawerSection}>Parts</a>
            <a id="recommendations" href="javascript:void(0);" onClick={this.swapDrawerSection}>Recommendations</a>
          </div>
          <div className="bikeDrawer-main">
            {this.state.activeTab.component}
          </div>
          <div className="bikeDrawer-footer">
            <button
              className="mdl-button mdl-js-button"
              onClick={this.closeDrawer}
            >Close</button>
          </div>
        </div>
      </div>
    );
  }
}
