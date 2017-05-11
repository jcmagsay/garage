import Home from 'pages/home/home';
import Garage from 'pages/garage/garage';
import Ride from 'pages/ride/ride';
import Social from 'pages/social/social';
import Shop from 'pages/shop/shop';
import NotFound from 'pages/not-found/not-found';


const navRoutes = [
  {
    'component': Home,
    'image': 'http://evolvebike.ca/wp-content/uploads/2015/11/specialized-logo.png',
    'name': 'S Digital',
    'path': '/',
  }
];

const otherRoutes = [
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

const routes = {
  'nav': navRoutes,
  'other': otherRoutes,
  'all': navRoutes.concat(otherRoutes)
};

export default routes;
