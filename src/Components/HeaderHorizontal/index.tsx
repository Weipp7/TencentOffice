import React from 'react'

import HeaderHorizontalWrapper from './Components/HeaderHorizontalWrapper';
import HeaderCorner from './Components/HeaderCorner';

class HeaderHorizontal extends React.Component {

    render() {
        return (
            <div>
            <HeaderHorizontalWrapper>
                <HeaderCorner></HeaderCorner>
            </HeaderHorizontalWrapper>
            </div>
                
        );
    }
}

export default HeaderHorizontal;