import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';  
import './collection-preview.styles.scss';


// Each property (title, items and so on is from the object in shop.data.js file)
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        <div className='preview'>
            {
                // The functions chain below called everytime the CollectionPreview component must be rendered
                // idx is a second param to filter() method, so it's just an index
                items
                .filter( (item, idx) => idx < 4)
                .map( ({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)


export default CollectionPreview;