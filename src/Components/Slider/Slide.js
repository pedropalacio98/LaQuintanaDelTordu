import React from 'react';
function GalleryItem(props) {

    return (
        <div>
            <img src={props.imgpath} />
        </div>
    )
}
export default GalleryItem