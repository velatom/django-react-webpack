import React from "react";
import PropTypes from 'prop-types';

import Headline from "../Headline/index.jsx";
import LinkDetail from "../LinkDetail/index.jsx";

export default class LinksDetail extends React.Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        pk: PropTypes.number
      })
    )
  }

  render() {
    const { links } = this.props;
    const linksItems = links.map(link => <LinkDetail key={link.pk} link={link} />);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">            
            <Headline>Links</Headline>
            {linksItems}
          </div>
        </div>
      </div>
    )
  }
}