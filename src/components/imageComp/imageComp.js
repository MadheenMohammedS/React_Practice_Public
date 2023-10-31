import React from 'react';
import SignupImage from '../../assets/signup-image.jpg';

class ImageComp extends React.Component {
    render() {
        return (
            <div>
                <img alt="signup" src={SignupImage} />
            </div>
        )
    }
}

export default ImageComp;