import React, {Component} from 'react';

export default class Home extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <button>
          <i className="material-icons">shopping_cart</i>
        </button>
        <button>
          <i className="material-icons">directions_bike</i>
        </button>
        <button>
          <i className="material-icons">build</i>
        </button>
        <button>
          <i className="material-icons">notifications</i>
        </button>
        <button>
          <i className="material-icons">face</i>
        </button>
      </div>
    );
  }
}
