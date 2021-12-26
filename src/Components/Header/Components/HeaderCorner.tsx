import React from "react";

import { HeaderHorizontalHeight, HeaderVerticalWidth } from "../../../Constants";

class HeaderCorner extends React.Component {

    render() {
        return (
            <div
                style={
                    {
                        width: HeaderVerticalWidth,
                        height: HeaderHorizontalHeight,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        boxSizing: "border-box",
                        borderBottom: "1px solid #dfdfdf",
                        borderRight: "1px solid #dfdfdf"
                    }
                }>

            </div>
        )
    }
}
export default HeaderCorner;