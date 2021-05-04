import React from 'react';
import ReactDOM, { render } from 'react-dom';
import LinksDetail from '../containers/LinksDetail/index.jsx';

window.render_components = (properties) => {
  window.params = {...properties};
  render(
    <LinksDetail links={properties.links} />,
    document.getElementById('root')
  );
};

if (module.hot) {
  if(window.params){
    window.render_components(window.params);
  }
  module.hot.accept();
}


