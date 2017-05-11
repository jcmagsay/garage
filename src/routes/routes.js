import Home from 'pages/home/home';
import Garage from 'pages/garage/garage';
import Ride from 'pages/ride/ride';
import Social from 'pages/social/social';
import Shop from 'pages/shop/shop';
import NotFound from 'pages/not-found/not-found';

const routes = [
  {
    'path': '/',
    'name': 'S Digital',
    'component': Home
  },
  {
    'path': '/garage',
    'name': 'Garage',
    'component': Garage
  },
  {
    'path': '/ride',
    'name': 'Ride',
    'component': Ride
  },
  {
    'path': '/social',
    'name': 'Social',
    'component': Social
  },
  {
    'path': '/shop',
    'name': 'Shop',
    'component': Shop
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound
  }
];

export default routes;
