import startApp from 'platform/startup';
import manifest from './manifest.json';
import routes from './routes';

startApp({
  entryName: manifest.entryName,
  url: manifest.rootUrl,
  routes,
});
