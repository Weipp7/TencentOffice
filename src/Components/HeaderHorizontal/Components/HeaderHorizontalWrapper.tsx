import React from 'react'

import './HeaderHorizontalWrapper.css'
import '../../Constants'
import { HeaderHorizontalHeight } from '../../Constants';

class HeaderHorizontalWrapper extends React.Component {
    render() {
        return (
            <div className='header-horizontal-wrapper' style={
                {
                    height: HeaderHorizontalHeight
                }
            }>
                {this.props.children}
            </div>
        )
    }
}

export default HeaderHorizontalWrapper;