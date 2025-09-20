import HelloWorldPage from './components/HelloWorldPage';

const routes = [
  { path: '/', exact: true, component: HelloWorldPage },
  { path: '/*', component: HelloWorldPage },
];

export default routes;
