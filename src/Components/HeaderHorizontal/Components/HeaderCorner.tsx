import React from "react";

import './HeaderCorner.css'
import '../../Constants'
import { HeaderHorizontalHeight, HeaderVerticalWidth } from "../../Constants";

class HeaderCorner extends React.Component {

    render() {
        return (
            <div className='header-corner' style={
                {
                    width: HeaderVerticalWidth,
                    height: HeaderHorizontalHeight
                }
            }>

            </div>
        )
    }
}
export default HeaderCorner;