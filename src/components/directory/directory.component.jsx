import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './sections-data.js';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA  
    }
  }


  render() {
    return(
      <div className="directory-menu">
        {/* {
          this.state.sections.map( ({title, imageUrl, id, size, linkUrl}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history} linkUrl={linkUrl}  /> 
          ))
        } */}

        {
          this.state.sections.map( ({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} /> 
          ))
        }
      </div>
    )
  }
}


export default Directory;