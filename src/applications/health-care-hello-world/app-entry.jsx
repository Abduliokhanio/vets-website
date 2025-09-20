import startApp from 'platform/startup';
import manifest from './manifest.json';
import routes from './routes';
import './scss/general.scss';

startApp({
  entryName: manifest.entryName,
  url: manifest.rootUrl,
  routes,
});
